import React, { ReactNode } from "react";
import { ReactComponent as TrendUpIcon } from "../../assets/icons/arrows/arrows-up-1.svg";
import { ReactComponent as TrendDownIcon } from "../../assets/icons/arrows/arrows-down-1.svg";
import { ReactComponent as TotalInteviewIcon } from "../../assets/icons/time/watch-1.svg";
// Define the shape of props using an interface or type alias
interface StatisticCardProps {
  title: string;
  count: string | number;
  trend?: "increase" | "decrease";
  icon: ReactNode;
  trendText: string;
  percentage?: number;
  specialIcon?: ReactNode;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  count,
  trend,
  icon,
  trendText,
  percentage,
  specialIcon,
}) => {
  // Decide the trend color based on the trend value
  const trendColor =
    trend === "increase"
      ? "text-green-600"
      : trend === "decrease"
      ? "text-red-600"
      : "text-primary-575";
  // Decide the trend arrow based on the trend value
  const TrendIconComponent =
    trend === "increase"
      ? TrendUpIcon
      : trend === "decrease"
      ? TrendDownIcon
      : null;

  return (
    <div className="flex flex-col justify-between w-[320px] h-[177px] bg-white shadow-custom rounded-custom p-[20px_15px] border-[0.5px] border-primary-550">
      <p className="body-text text-grayMedium">{title}</p>
      <div className="flex items-center justify-between">
        <p className="h2">{count}</p>
        <div className=" text-primary-575">{icon}</div>
      </div>
      <div className={`flex items-center  ${trendColor}`}>
        {TrendIconComponent ? (
          <TrendIconComponent style={{ width: "20px", height: "20px" }} />
        ) : specialIcon ? (
          <div>{specialIcon}</div>
        ) : null}

        {percentage !== undefined && ( // Check if percentage is provided
          <span className={`menuAndButton-text ${trendColor}`}>
            {percentage}% {/* Render the percentage followed by a '%' symbol */}
          </span>
        )}
        <span className="small-text pl-3 text-grayMedium">{trendText}</span>
      </div>
    </div>
  );
};

export default StatisticCard;
