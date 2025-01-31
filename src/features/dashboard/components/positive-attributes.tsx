import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { useState } from "react";

export const PositiveAttributes = () => {
  return (
    <div>
      <h2 className="text-[#292929] font-semibold text-xl pb-2">
        Positive Attributes
      </h2>
      <div className="w-full ">
        <div className="flex gap-5 justify-center lg:justify-start lg:flex-row flex-wrap w-full ">
          {CARD_DATA.map((card, index) => (
            <AttributesCard {...card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const AttributesCard = ({
  imgSrc,
  rating,
  attributeName,
  attributeDescription,
}: {
  imgSrc: string;
  rating: number;
  attributeName: string;
  attributeDescription: string;
}) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div
      onClick={() => {
        setShowDescription(!showDescription);
      }}
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      className="lg:w-56 bg-white rounded-xl border relative p-5 cursor-pointer "
    >
      <img
        src={"/overlay-icon.svg"}
        alt="overlay icon"
        className="absolute top-0 right-0"
      />
      <img src={imgSrc} alt="genuineness" className=" absolute top-2 right-2" />
      <h2 className="font-extrabold text-3xl">8.2</h2>
      <p className="py-2">{attributeName}</p>
      <RatingBar value={rating} />

      <a className="font-medium text-[#048AE2] py-1 mt-4 inline-block border-b-2 border-[#048AE2]">
        View Details
      </a>

      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full bg-white rounded-xl ",
          showDescription ? "opacity-100 " : "opacity-0"
        )}
        style={{ transition: "opacity 0.5s ease-in-out" }}
      >
        <XIcon
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => setShowDescription(false)}
        />
        <div className="p-5 text-center">
          <p className=" text-ellipsis line-clamp-4">{attributeDescription}</p>
        </div>
      </div>
    </div>
  );
};
export const RatingBar = ({ value = 0 }: { value: number }) => {
  const totalBoxes = 10; // Total number of boxes
  const filledBoxes = Math.floor(value); // Whole number boxes
  const fraction = value - filledBoxes; // Fraction for the partial box
  const isLowRating = value < 5; // Determine gradient color

  // Gradient for filled boxes
  const gradient = isLowRating
    ? "linear-gradient(to right, #EC3232, #B01717)" // Red gradient for low rating
    : "linear-gradient(to right, #38A737, #117710)"; // Green gradient for high rating

  return (
    <div className="flex gap-1">
      {/* Render filled and fractional boxes */}
      {Array.from({ length: totalBoxes }, (_, index) => {
        // Full boxes
        if (index < filledBoxes) {
          return (
            <div
              key={index}
              className="w-6 h-4 transform -skew-x-[20deg]"
              style={{ background: gradient }}
            ></div>
          );
        }

        // Fractional box
        if (index === filledBoxes && fraction > 0) {
          return (
            <div
              key={index}
              className="w-6 h-4 transform -skew-x-[20deg] overflow-hidden"
              style={{
                background: `linear-gradient(to right, ${
                  isLowRating ? "#EC3232" : "#38A737"
                } ${fraction * 100}%, #EBF2F5 ${fraction * 100}%)`,
              }}
            ></div>
          );
        }

        // Empty boxes
        return (
          <div
            key={index}
            className="w-6 h-4 bg-[#EBF2F5] transform -skew-x-[20deg] "
          ></div>
        );
      })}
    </div>
  );
};

const CARD_DATA = [
  {
    imgSrc: "genuineness.svg",
    rating: 8.2,
    attributeName: "Genuineness",
    attributeDescription:
      "The genuineness of the product is the most important attribute",
  },
  {
    imgSrc: "consistancy.svg",
    rating: 9.0,
    attributeName: "Consistency",
    attributeDescription:
      "The quality of the product is the most important attribute",
  },
  {
    imgSrc: "logic.svg",
    rating: 8.9,
    attributeName: "Logic",
    attributeDescription:
      "The durability of the product is the most important attribute",
  },
  {
    imgSrc: "genuineness.svg",
    rating: 8.2,
    attributeName: "Genuineness",
    attributeDescription:
      "The genuineness of the product is the most important attribute",
  },

  {
    imgSrc: "fear.svg",
    rating: 4,
    attributeName: "Irrational Fear",
    attributeDescription:
      "The reliability of the product is the most important attribute",
  },
  {
    imgSrc: "excitement.svg",
    rating: 4,
    attributeName: "Irrational Excitement",
    attributeDescription:
      "The reliability of the product is the most important attribute",
  },
  {
    imgSrc: "deflection.svg",
    rating: 1.8,
    attributeName: "Deflection",
    attributeDescription:
      "The reliability of the product is the most important attribute",
  },

  {
    imgSrc: "traingulation.svg",
    rating: 2.4,
    attributeName: "Triangulation",
    attributeDescription:
      "The reliability of the product is the most important attribute",
  },
];
