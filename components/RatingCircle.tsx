interface RatingCircleProps {
  size: number;
  percentage: number;
}

export default function RatingCircle({ size, percentage }: RatingCircleProps) {
  const CANVAS_SIZE = 100;
  const STROKE_WIDTH = 10;
  const CENTER = CANVAS_SIZE / 2;
  const RADIUS = (CANVAS_SIZE - STROKE_WIDTH) / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  const dashOffset = CIRCUMFERENCE * (1 - percentage / 100);

  const getColor = (p: number) => {
    if (p === 0) return "stroke-none"
    if (p >= 70) return "stroke-green-500";
    if (p >= 40) return "stroke-amber-400";
    return "stroke-red-500";
  };

  const colorClass = getColor(percentage);

  return (
    <div
      className="relative flex items-center justify-center"
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${CANVAS_SIZE} ${CANVAS_SIZE}`}
        className="transform -rotate-90"
      >
        <circle 
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          className="stroke-gray-500 fill-black/60"
          strokeWidth={STROKE_WIDTH}
        />

        <circle 
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          className={`${colorClass} transition-all duration-500 ease-out`}
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
        />
      </svg>

      <span
        className="absolute text-white font-bold"
        style={{fontSize: size * 0.35}}
      >
        {percentage ? percentage : "NR"}
        {percentage ? <span style={{fontSize: size * 0.2}}>%</span> : ""}
      </span>
    </div>
  );
}
