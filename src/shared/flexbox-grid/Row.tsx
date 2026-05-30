import React from "react";
import { cn } from "@/lib/utils";
import { GRID_CONFIG } from "@/components/shared/flexbox-grid/grid-config";

interface RowProps {
  children: React.ReactNode;
  className?: string;
  gutter?: number;
}

export function Row({
  children,
  className = "",
  gutter = GRID_CONFIG.defaultGutter,
}: RowProps) {
  const gutterVal = `${gutter * 0.25}rem`;
  const style = {
    "--gutter-x": gutterVal,
    marginLeft: `calc(${gutterVal} * -1)`,
    marginRight: `calc(${gutterVal} * -1)`,
  } as React.CSSProperties;

  return (
    <div
      style={style}
      className={cn("bootstrap-row flex flex-wrap", className)}
    >
      {children}
    </div>
  );
}
