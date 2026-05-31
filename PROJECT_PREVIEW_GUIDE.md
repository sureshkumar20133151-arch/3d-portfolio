# Portfolio Project Preview Guide

This guide explains how to add new projects to the 3D Portfolio and generate optimized preview GIFs for two scenarios:
1. **Case A: Projects with a sequence of animation frames** (like PC Factory or ABC Builders).
2. **Case B: Live or static websites** (like Mozhi Boutique) where a scrolling preview needs to be recorded.

---

## 🚀 Step 1: Add Project Configuration
Add your project details in the projects array in:
`src/data/projects.tsx`

Example entry:
```tsx
  {
    id: "your-project-id",
    category: "E-commerce Store / Landing Page / etc",
    title: "Project Name",
    src: "/assets/projects-screenshots/your-project-id/hero-animation.gif?v=1", // Bump ?v=1 for cache-busting
    screenshots: ["hero-animation.gif", "screenshot1.png", "screenshot2.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.whatsapp,
      ],
    },
    live: "https://your-live-website-url.com",
    github: "https://github.com/your-username/your-repo-name",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Tagline / Subtitle
          </TypographyP>
          <TypographyP className="font-mono ">
            Detailed description of the project, architecture, and value.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/your-project-id/hero-animation.gif?v=1`,
              `${BASE_PATH}/your-project-id/screenshot1.png`,
              `${BASE_PATH}/your-project-id/screenshot2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-2">
            <li>Feature item 1...</li>
            <li>Feature item 2...</li>
          </ul>
        </div>
      );
    },
  },
```

---

## 🎨 Step 2: Generate Preview GIF

### Case A: Image Sequence Animation
If you have folders containing video frame screenshots (e.g. `video1`, `video2`, `video3`), use this Python script to sample and compile them. 

#### Setup & Compilation Script (`compile_sequence_gif.py`):
```python
import os
import glob
from PIL import Image

# Directories
OUT_DIR = r"public/assets/projects-screenshots/your-project-id"
FRAMES_DIR = os.path.join(OUT_DIR, "frames_folder") # Path where original frames are stored

frames = []
# Load frames (e.g. video1, video2, etc.)
for video in ["video1", "video2", "video3"]:
    video_frames = sorted(glob.glob(os.path.join(FRAMES_DIR, f"{video}_frame_*.jpg")))
    # Sample every 2nd or 3rd frame to balance smoothness vs size
    sampled = video_frames[::2] 
    for fp in sampled:
        img = Image.open(fp)
        w, h = img.size
        # Resize to 450px width for portfolio preview grid optimization
        if w > 450:
            ratio = 450 / w
            img = img.resize((450, int(h * ratio)), Image.Resampling.LANCZOS)
        frames.append(img.convert("RGB"))

# Save GIF (70ms delay = 14.3 fps, plays at real-time 1x speed for 1-in-2 sampling)
out_path = os.path.join(OUT_DIR, "hero-animation.gif")
frames[0].save(
    out_path,
    save_all=True,
    append_images=frames[1:],
    duration=70, 
    loop=0,
    optimize=True,
)
print(f"Generated GIF: {out_path} ({os.path.getsize(out_path)/(1024*1024):.2f} MB)")
```

---

### Case B: Live Web Recording (Scrolling Preview)
If the project is a live or static website and has no recorded sequence, use **Playwright** to open the live URL, record it scrolling, and compile a GIF.

#### Prerequisites:
```bash
pip install playwright
playwright install chromium
```

#### Playwright Recording Script (`record_live_gif.py`):
```python
import os
import asyncio
from playwright.async_api import async_playwright
from PIL import Image

URL = "https://your-live-website-url.com/"
OUT_DIR = r"public/assets/projects-screenshots/your-project-id"
TEMP_DIR = os.path.join(OUT_DIR, "_temp_frames")

os.makedirs(TEMP_DIR, exist_ok=True)

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1280, "height": 720})
        page = await context.new_page()
        await page.goto(URL, wait_until="networkidle", timeout=60000)
        await asyncio.sleep(2) # Extra time for page load

        # Get total scrollable height
        scroll_height = await page.evaluate("document.body.scrollHeight")
        max_scroll = scroll_height - 720
        
        frames = []
        scroll_step = 30  # Scroll step in pixels
        current_scroll = 0
        idx = 0
        
        # Scroll and screenshot loop
        while current_scroll < max_scroll:
            await page.evaluate(f"window.scrollTo(0, {current_scroll})")
            await asyncio.sleep(0.08) # Let layout settle
            
            temp_fp = os.path.join(TEMP_DIR, f"frame_{idx:04d}.png")
            await page.screenshot(path=temp_fp)
            
            # Load, resize, and convert
            img = Image.open(temp_fp)
            w, h = img.size
            ratio = 450 / w
            img_resized = img.resize((450, int(h * ratio)), Image.Resampling.LANCZOS)
            frames.append(img_resized.convert("RGB"))
            
            current_scroll += scroll_step
            idx += 1
            
        # Pause at the bottom
        for _ in range(5):
            frames.append(frames[-1])
            
        await browser.close()
        
        # Save scrolling GIF
        out_path = os.path.join(OUT_DIR, "hero-animation.gif")
        frames[0].save(
            out_path,
            save_all=True,
            append_images=frames[1:],
            duration=80, # 80ms play speed (12.5 fps)
            loop=0,
            optimize=True,
        )
        print(f"Generated Scroll GIF: {out_path} ({os.path.getsize(out_path)/(1024*1024):.2f} MB)")
        
        # Cleanup
        import shutil
        shutil.rmtree(TEMP_DIR)

if __name__ == "__main__":
    asyncio.run(main())
```

---

## ⚡ Step 3: Cache Busting
Browsers aggressively cache animated GIFs. When updating a GIF under the same filename:
1. Modify the URL parameter in `src/data/projects.tsx` (e.g. from `?v=1` to `?v=2`).
2. Refresh the browser using a hard refresh (**Ctrl + F5** or **Cmd + Shift + R**).
