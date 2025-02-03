import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState } from "react";
import { tempData } from "../data";

const chartConfig = {
  integrity: {
    label: "Integrity Score",
    color: "#0085FF",
  },
  stock: {
    label: "Stock Price",
    color: "#76CDFF",
  },
  market: {
    label: "Market Price",
    color: "#A5DCB8",
  },
} satisfies ChartConfig;
export const IntegrityToPrice = () => {
  const [selectedLegend, setSelectedLegend] = useState<string | null>(null);
  return (
    <div className="bg-white  rounded-md border">
      <div className="border-b px-5 py-3 flex flex-row justify-between">
        <p className="font-semibold text-xl text-[#2929229]">
          Integrity to price
        </p>
        <div id="integrity-to-price-legend"></div>
      </div>
      <div className="p-5 w-full h-72">
        <ResponsiveContainer width="100%">
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={tempData["CHART_DATA"]}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <Legend
                verticalAlign="top"
                align="right"
                content={({ payload }) => (
                  <div className=" absolute right-0 -top-14 flex flex-row gap-5">
                    {payload?.map((entry, index) => {
                      const legColor = entry?.color;
                      return (
                        <div
                          onClick={() =>
                            setSelectedLegend(
                              selectedLegend === entry.value
                                ? null
                                : entry.value
                            )
                          }
                          key={index}
                          className="flex-row justify-center items-center gap-2 capitalize hidden md:flex"
                        >
                          <div
                            className={`size-2 rounded-full ${
                              selectedLegend === entry.value
                                ? "animate-pulse"
                                : ""
                            }`}
                            style={{
                              backgroundColor: legColor,
                            }}
                          />
                          {entry.value}
                        </div>
                      );
                    })}
                  </div>
                )}
              />
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={10}>
                <Label
                  angle={-90}
                  value="Active users (k)"
                  position="insideLeft"
                  style={{ textAnchor: "middle" }}
                />
              </YAxis>

              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="integrity"
                type="monotone"
                stroke="var(--color-integrity)"
                strokeWidth={2}
                hide={selectedLegend === "integrity"}
                dot={false}
              />
              <Line
                dataKey="stock"
                type="monotone"
                stroke="var(--color-stock)"
                hide={selectedLegend === "stock"}
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="market"
                type="monotone"
                stroke="var(--color-market)"
                hide={selectedLegend === "market"}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
