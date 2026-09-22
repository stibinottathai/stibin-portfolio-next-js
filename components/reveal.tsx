export type RevealDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale"
  | "fade";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: RevealDirection;
  className?: string;
  threshold?: number;
  blur?: boolean;
  eager?: boolean;
}

export default function Reveal({
  children,
  direction = "up",
  className = "",
  blur = true,
  eager = false,
}: RevealProps) {
  // Keep the component paint-safe without waiting for hydration. Desktop
  // reveal motion is progressive enhancement handled by CSS view timelines.
  // Unsupported browsers and all mobile devices simply display the content.
  const dirClass =
    direction === "left"
      ? "reveal-left"
      : direction === "right"
        ? "reveal-right"
        : direction === "down"
          ? "reveal-down"
          : direction === "scale"
            ? "reveal-scale"
            : direction === "fade"
              ? "reveal-fade"
              : "reveal-up";

  const blurClass = blur ? "reveal-blur" : "";

  return (
    <div
      className={`reveal ${eager ? "reveal-eager" : dirClass} ${eager ? "" : blurClass} ${className}`}
    >
      {children}
    </div>
  );
}
