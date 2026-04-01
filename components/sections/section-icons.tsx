import {
  FileText,
  FolderKanban,
  MapPin,
  MapPinned,
  Megaphone,
  Monitor,
  Phone,
  PhoneIncoming,
  Search,
  Star,
  TrendingUp,
} from "lucide-react";
import type { ReactNode } from "react";

import type { ProcessStep, ServiceItem } from "@/content/site";

export function renderProcessIcon(icon: ProcessStep["icon"]): ReactNode {
  switch (icon) {
    case "phone":
      return <Phone className="size-6" strokeWidth={1.8} />;
    case "layout":
      return <Monitor className="size-6" strokeWidth={1.8} />;
    case "trendingUp":
      return <TrendingUp className="size-6" strokeWidth={1.8} />;
    default: {
      const exhaustiveCheck: never = icon;
      throw new Error(`Unhandled process icon: ${exhaustiveCheck}`);
    }
  }
}

export function renderServiceIcon(icon: ServiceItem["icon"]): ReactNode {
  switch (icon) {
    case "monitor":
      return <Monitor className="size-6" strokeWidth={1.8} />;
    case "search":
      return <Search className="size-6" strokeWidth={1.8} />;
    case "map":
      return <MapPin className="size-6" strokeWidth={1.8} />;
    case "folders":
      return <FolderKanban className="size-6" strokeWidth={1.8} />;
    case "star":
      return <Star className="size-6" strokeWidth={1.8} />;
    case "megaphone":
      return <Megaphone className="size-6" strokeWidth={1.8} />;
    case "phoneIncoming":
      return <PhoneIncoming className="size-6" strokeWidth={1.8} />;
    case "fileText":
      return <FileText className="size-6" strokeWidth={1.8} />;
    case "mapPinned":
      return <MapPinned className="size-6" strokeWidth={1.8} />;
    default: {
      const exhaustiveCheck: never = icon;
      throw new Error(`Unhandled service icon: ${exhaustiveCheck}`);
    }
  }
}
