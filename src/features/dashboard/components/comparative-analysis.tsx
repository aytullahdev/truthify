import { useEffect, useState } from "react";
export interface ComparativeAnalysisProps {
  position: number;
  imgSrc: string;
  name: string;
}
export const ComparativeAnalysis = ({
  position,
  imgSrc,
  name,
}: ComparativeAnalysisProps) => {
  return (
    <div className="bg-white  rounded-md border pb-20">
      <div className=" px-5 py-3 flex flex-row justify-between">
        <div>
          <p className="font-semibold text-xl text-[#2929229]">
            Comparative Analysis
          </p>
          <span className="text-[#1D222D] text-xs">{name}</span>
        </div>
        <div id="integrity-to-price-legend"></div>
      </div>
      <GradientLineChart position={position} imgSrc={imgSrc} />
    </div>
  );
};

const GradientLineChart = ({ position = 6, imgSrc = "satynadella.png" }) => {
  const [normalizedPosition, setNormalizePosition] = useState(0);
  // Define the gradient colors
  const gradient = [
    { percent: 0, color: "#FF0701" },
    { percent: 25, color: "#FFCC22" },
    { percent: 50, color: "#FC7F07" },
    { percent: 75, color: "#83F579" },
    { percent: 100, color: "#06B104" },
  ];

  // Function to get the gradient color based on the value
  const getGradientColor = (value: number) => {
    for (let i = 0; i < gradient.length; i++) {
      if (value <= gradient[i].percent) {
        return gradient[i].color;
      }
    }
    return gradient[gradient.length - 1].color;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNormalizePosition(position > 10 ? 10 : position);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center pt-20 flex-col align-bottom">
      <div className="flex flex-col  items-center w-full max-w-sm lg:max-w-[350px] xl:max-w-lg">
        {/* Line Chart */}
        <div className="relative w-full h-1 bg-gray-200 rounded-lg">
          <div
            className="absolute  h-full bg-gradient-to-r from-[#FF0701] via-[#FFCC22] via-[#FC7F07] via-[#83F579] to-[#06B104]"
            style={{
              width: "100%",
              borderRadius: "0.375rem",
            }}
          >
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="absolute w-2 h-2 bg-black rounded-full"
                style={{
                  left: `${index * 25}%`,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
            ))}
          </div>
          <div
            className="size-10 -top-14 relative rounded-full border-4 border-black"
            style={{
              left: `${(normalizedPosition - 1) * 10}%`,
              backgroundColor: getGradientColor(normalizedPosition * 10),
              transition: "left 0.5s ease",
            }}
          >
            <img src={imgSrc} alt="Compass" className="w-full h-full" />
            <div className="size-2 rounded-full bg-black border-1 border-white left-1/2 -translate-x-1/2 -bottom-[26px] absolute animate-pulse"></div>
          </div>
        </div>

        {/* Labels */}
        <div className="flex justify-between w-full mt-2 text-[10px] text-gray-500">
          <span>Very Poor</span>
          <span>Poor</span>
          <span>Average CEO</span>
          <span>Good</span>
          <span>Great</span>
        </div>
      </div>
    </div>
  );
};
