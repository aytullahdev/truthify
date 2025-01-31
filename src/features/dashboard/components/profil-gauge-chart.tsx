import { useEffect, useState } from "react";

const DynamicLineGauge = ({
  value = 7.8,
  maxValue = 10,
  title = "",
  caption = "",
}: {
  value: number;
  maxValue: number;
  title: string;
  caption: string;
}) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    setCurrentValue(0);
    const timer = setTimeout(() => {
      setCurrentValue(value);
    }, 100);
    return () => clearTimeout(timer);
  }, [value]);

  const totalLines = 60;
  const radius = 100;

  const getLineColor = (index: number) => {
    const percentage = (index / totalLines) * 100;
    const valuePercentage = (currentValue / maxValue) * 100;

    // If the line is beyond the current value, return gray
    if (percentage > valuePercentage) {
      return "#D9D9D9";
    }

    // Otherwise, use the color scheme for active portion
    if (percentage <= 20) return "#D26868";
    if (percentage <= 46) return "#FF6666";
    if (percentage <= 74) return "#F3BF13";
    if (percentage <= 87) return "#FFAD0E";
    return "#38A737";
  };

  const renderLines = () => {
    return Array.from({ length: totalLines }).map((_, index) => {
      const angle = -180 + (180 / (totalLines - 1)) * index;
      const radians = (angle * Math.PI) / 180;

      const x1 = radius + radius * Math.cos(radians);
      const y1 = radius + radius * Math.sin(radians);
      const x2 = radius + (radius - 20) * Math.cos(radians);
      const y2 = radius + (radius - 20) * Math.sin(radians);

      return (
        <line
          key={index}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={getLineColor(index)}
          strokeWidth="2"
          style={{ transition: "stroke 0.5s ease-in-out" }}
        />
      );
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg
          className="w-full"
          viewBox="0 0 200 120"
          style={{ transform: "translateY(10px)" }}
        >
          {renderLines()}
        </svg>

        {/* Score Display */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[-10px] text-center">
          <div className="text-4xl font-extrabold">
            {currentValue.toFixed(1)}
          </div>
          <div className="text-base text-[#292929] mt-1">{title}</div>
        </div>
      </div>

      {/* Sample Text */}
      <p className="text-sm text-[#292929] mt-4 text-center px-4">{caption}</p>
    </div>
  );
};

export default DynamicLineGauge;
