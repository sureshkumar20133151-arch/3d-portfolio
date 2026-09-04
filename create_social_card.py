import os
from PIL import Image, ImageDraw, ImageFont

# Create a 1200x630 canvas
W, H = 1200, 630
card = Image.new("RGBA", (W, H), (3, 7, 18, 255)) # dark theme #030712

# Draw subtle gradient glow background on the left and right
draw = ImageDraw.Draw(card)

# Glow around title
for r in range(250, 0, -5):
    alpha = int(12 * (1 - r / 250))
    draw.ellipse([(150 - r, 315 - r), (150 + r, 315 + r)], fill=(37, 99, 235, alpha))

# Glow around keyboard on right
for r in range(350, 0, -5):
    alpha = int(15 * (1 - r / 350))
    draw.ellipse([(850 - r, 315 - r), (850 + r, 315 + r)], fill=(139, 92, 246, alpha))

# Load uploaded portfolio screenshot or site screenshot for keyboard
kb_src_path = r"C:\Users\Suresh\.gemini\antigravity\brain\9d7694f6-9a96-4446-9d05-80ebc8e9be2f\.user_uploaded\media_1788504547752.png"
if os.path.exists(kb_src_path):
    kb_img = Image.open(kb_src_path).convert("RGBA")
    
    # Crop the 3D keyboard area from the right side of screenshot
    # Screenshot is 1024x575
    w_src, h_src = kb_img.size
    kb_crop = kb_img.crop((int(w_src * 0.35), int(h_src * 0.1), int(w_src * 0.95), int(h_src * 0.9)))
    
    # Resize keeping aspect ratio
    target_h = 500
    aspect = kb_crop.width / kb_crop.height
    target_w = int(target_h * aspect)
    kb_resized = kb_crop.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Paste onto right side of card
    paste_x = W - target_w - 40
    paste_y = (H - target_h) // 2
    card.paste(kb_resized, (paste_x, paste_y), kb_resized)

# Draw Left Side Typography
draw = ImageDraw.Draw(card)

# Try loading system fonts or fallback to default
def get_font(size, bold=False):
    font_names = [
        "arialbd.ttf" if bold else "arial.ttf",
        "segoeui.ttf",
        "verdana.ttf"
    ]
    for name in font_names:
        try:
            return ImageFont.truetype(name, size)
        except:
            pass
    return ImageFont.load_default()

font_sub = get_font(26, bold=True)
font_title = get_font(72, bold=True)
font_role = get_font(28, bold=False)
font_badge = get_font(20, bold=True)

margin_left = 80

# Badge / Small label
draw.text((margin_left, 110), "HI, I AM", fill=(148, 163, 184, 255), font=font_sub)

# Name
draw.text((margin_left, 160), "Suresh", fill=(255, 255, 255, 255), font=font_title)
draw.text((margin_left, 245), "Kumar", fill=(255, 255, 255, 255), font=font_title)

# Role / Subtitle
draw.text((margin_left, 360), "Web Developer & AI Builder", fill=(59, 130, 246, 255), font=font_role)
draw.text((margin_left, 405), "Madurai, Tamil Nadu", fill=(148, 163, 184, 255), font=font_role)

# Bottom Pill / Tech highlights
pill_text = "React • Next.js • 3D Web • AI Tools"
draw.rectangle([(margin_left, 475), (margin_left + 420, 520)], outline=(59, 130, 246, 180), width=2, fill=(15, 23, 42, 200))
draw.text((margin_left + 25, 488), pill_text, fill=(226, 232, 240, 255), font=font_badge)

# Save card image to public/og-image.png
out_path = r"c:\Users\Suresh\Documents\Antigravity\Portfolio\3d portfolio\public\og-image.png"
card.save(out_path, "PNG")
print(f"Social preview card saved successfully to {out_path}")
