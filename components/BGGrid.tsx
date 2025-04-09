"use client";

import { cn } from "@/lib/utils";
import { BackgroundType } from "@/lib/constants";

interface BackgroundGridProps {
  backgrounds: BackgroundType[];
  selectedBackground: BackgroundType;
  onSelect: (background: BackgroundType) => void;
}


export default function BackgroundGrid({
  backgrounds,
  selectedBackground,
  onSelect,
}: BackgroundGridProps) {
  return (
    <div>
      {backgrounds.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-lg text-muted-foreground">
            No backgrounds found matching your search.
          </p>
          <p className="mt-2">
            Try a different search term or browse all backgrounds.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {backgrounds.map((background) => {
            return (
              <div
                key={background.id}
                className={cn(
                  "group relative aspect-video cursor-pointer overflow-hidden rounded-xl border transition-all",
                  selectedBackground.id === background.id
                    ? "border-primary shadow-lg ring-2 ring-primary ring-opacity-50"
                    : "border-gray-200/80 shadow-sm hover:border-primary/50 dark:border-gray-700/80",
                )}
                onClick={() => onSelect(background)}
              >
                <div className="absolute inset-0">{background.component}</div>

                {/* Background name */}
                <div className="absolute inset-x-0 bottom-0 p-2">
                  <span className="rounded-full bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                    {background.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}