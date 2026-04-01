import Image from "next/image";
import {
  Calendar,
  ClipboardList,
  Mail,
  MapPin,
  Megaphone,
  Monitor,
  PhoneIncoming,
  Star,
  Video,
} from "lucide-react";
import type { ReactNode } from "react";

import type { ServicePillar } from "@/content/site";

function renderPillarIcon(icon: ServicePillar["icon"]): ReactNode {
  const cls = "size-6";
  const sw = 1.8;
  switch (icon) {
    case "monitor":
      return <Monitor className={cls} strokeWidth={sw} />;
    case "search":
      return <MapPin className={cls} strokeWidth={sw} />;
    case "phoneIncoming":
      return <PhoneIncoming className={cls} strokeWidth={sw} />;
    case "megaphone":
      return <Megaphone className={cls} strokeWidth={sw} />;
    case "star":
      return <Star className={cls} strokeWidth={sw} />;
    case "clipboardList":
      return <ClipboardList className={cls} strokeWidth={sw} />;
    case "mail":
      return <Mail className={cls} strokeWidth={sw} />;
    case "video":
      return <Video className={cls} strokeWidth={sw} />;
    case "calendar":
      return <Calendar className={cls} strokeWidth={sw} />;
    default: {
      const exhaustiveCheck: never = icon;
      throw new Error(`Unhandled pillar icon: ${exhaustiveCheck}`);
    }
  }
}

type PillarCardProps = {
  pillar: ServicePillar;
};

export function PillarCard({ pillar }: PillarCardProps) {
  const hasImage = Boolean(pillar.imageUrl);

  return (
    <article className="group relative flex min-h-[17rem] flex-col justify-end overflow-hidden rounded-2xl border border-white/[0.07] bg-[var(--v2-elevated)] shadow-[0_1px_0_rgb(255_255_255_/_0.04)_inset] transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform motion-safe:hover:-translate-y-1.5 motion-safe:hover:scale-[1.015] hover:border-white/[0.14] hover:shadow-[0_22px_48px_-16px_rgb(0_0_0_/_0.55),0_0_0_1px_rgb(255_255_255_/_0.04)] sm:min-h-[18rem]">
      {hasImage && pillar.imageUrl ? (
        <>
          <Image
            src={pillar.imageUrl}
            alt=""
            fill
            className="object-cover opacity-30 transition duration-500 ease-out motion-safe:group-hover:scale-105 group-hover:opacity-40"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--v2-canvas)]/95 via-[var(--v2-canvas)]/50 to-transparent transition duration-300 group-hover:via-[var(--v2-canvas)]/45" />
        </>
      ) : null}

      {!hasImage ? (
        <div className="absolute right-5 top-5 flex size-12 items-center justify-center rounded-full bg-[color:var(--brand)] text-white shadow-lg shadow-orange-500/15 transition duration-300 motion-safe:group-hover:scale-110 group-hover:shadow-orange-500/25">
          {renderPillarIcon(pillar.icon)}
        </div>
      ) : null}

      <div className="relative p-6 md:p-7">
        <h3 className="text-lg font-bold text-zinc-50 transition duration-300 group-hover:text-white md:text-xl">
          {pillar.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400 transition duration-300 group-hover:text-zinc-300">
          {pillar.description}
        </p>
      </div>
    </article>
  );
}
