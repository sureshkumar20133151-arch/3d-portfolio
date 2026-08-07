"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Particles from "@/components/Particles";
import RemoteCursors from "@/components/realtime/remote-cursors";
import EasterEggs from "@/components/easter-eggs";
import ElasticCursor from "@/components/ui/ElasticCursor";
import RadialMenu from "@/components/radial-menu/index";

export default function AppOverlays() {
  const isHome = usePathname() === "/";

  useEffect(() => {
    const sanitizeHash = () => {
      const currentHash = window.location.hash;
      if (currentHash && (currentHash.match(/#/g) || []).length > 1) {
        const cleanAnchor = currentHash.split("#").filter(Boolean).pop();
        if (cleanAnchor) {
          window.history.replaceState(null, "", window.location.pathname + "#" + cleanAnchor);
        }
      }
    };
    sanitizeHash();
    window.addEventListener("hashchange", sanitizeHash);
    const interval = setInterval(sanitizeHash, 300);
    return () => {
      window.removeEventListener("hashchange", sanitizeHash);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Particles
        className="fixed inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      {isHome && <RemoteCursors />}
      <EasterEggs />
      <ElasticCursor />
      {isHome && <RadialMenu />}
    </>
  );
}
