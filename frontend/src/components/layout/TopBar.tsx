import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Icon } from "@/components/ui/Icon";

export function TopBar() {
  return (
    <div className="bg-primary-dark text-white/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 transition-colors hover:text-gold-light">
            <Icon name="phone" className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{siteConfig.phone}</span>
          </a>
          <span className="hidden h-3 w-px bg-white/20 md:block" />
          <span className="hidden md:inline opacity-80">{siteConfig.email}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden rounded-full bg-white/10 px-2.5 py-0.5 text-emerald-300 sm:inline">
            ● پاسخگویی ۲۴/۷
          </span>
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-medium text-emerald-300 transition-colors hover:text-white"
          >
            <Icon name="whatsapp" className="h-3.5 w-3.5" />
            واتساپ
          </a>
        </div>
      </div>
    </div>
  );
}
