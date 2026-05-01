interface SparkleIconProps {
  /** Pixel size for both width and height */
  size: number;
  fill: string;
  /** SVG-level opacity (0–1) */
  fillOpacity: number;
  /** One of the CSS animation helpers defined in globals.css */
  animClass: "sparkle-1" | "sparkle-2" | "sparkle-3";
  /** Inline style overrides for absolute positioning */
  style?: React.CSSProperties;
}

export default function SparkleIcon({
  size,
  fill,
  fillOpacity,
  animClass,
  style,
}: SparkleIconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`absolute pointer-events-none ${animClass}`}
      style={style}
    >
      <path
        d="M12 2 L13.5 9 L20 8 L14.5 13 L17 20 L12 15.5 L7 20 L9.5 13 L4 8 L10.5 9 Z"
        fill={fill}
        opacity={fillOpacity}
      />
    </svg>
  );
}
