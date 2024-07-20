import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function CustomTooltipProvider({
  children,
  label,
  className,
  side,
}: {
  children: ReactNode;
  label: string;
  className?: string;
  side?: "top" | "right" | "bottom" | "left" | undefined;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side ?? "top"}
          className={cn(
            "bg-primary-base-white text-primary-neutral-600 overflow-auto",
            className,
          )}
        >
          <span className="font-medium">{label}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
