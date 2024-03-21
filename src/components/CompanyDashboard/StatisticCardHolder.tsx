import React, { useState, useEffect } from "react";
import StatisticCard from "./StatisticCard.tsx";
import { ReactComponent as TotalCandidatesIcon } from "../../assets/icons/users/group-3.svg";
import { ReactComponent as NewCandidatesIcon } from "../../assets/icons/users/profile-1.svg";
import { ReactComponent as TotalInteviewIcon } from "../../assets/icons/time/watch-1.svg";
import { ReactComponent as NewAssessmentsIcon } from "../../assets/icons/files/Document-Align-Left-14.svg";
import { ReactComponent as CalenderIcon } from "../../assets/icons/time/calender-1.svg";

const StatisticCardHolder = () => {
  // const [statistics, setStatistics] = useState([]);

  // useEffect(() => {
  //   // Function to fetch statistics data from an API endpoint
  //   const fetchStatistics = async () => {
  //     try {
  //       const response = await fetch("/api/statistics"); // Replace with your actual endpoint
  //       const data = await response.json();
  //       setStatistics(data); // Assume the API returns data in the format expected by StatisticCard
  //     } catch (error) {
  //       console.error("Failed to fetch statistics:", error);
  //     }
  //   };

  //   fetchStatistics();
  // }, []);

  return (
    <div className="flex justify-between gap-4 p-4 max-w-[1366px]">
      <StatisticCard
        icon={<TotalCandidatesIcon style={{ width: "40px", height: "40px" }} />}
        title="Total Candidates"
        trend="increase"
        count="120"
        trendText=" vs last month"
        percentage={4}
      />
      <StatisticCard
        icon={<NewCandidatesIcon style={{ width: "40px", height: "40px" }} />}
        title="New Candidates"
        trend="decrease"
        count="10"
        trendText=" vs last month"
        percentage={2}
      />
      <StatisticCard
        icon={<CalenderIcon style={{ width: "40px", height: "40px" }} />}
        title="Total Interviews"
        count="2"
        specialIcon={
          <TotalInteviewIcon style={{ width: "20px", height: "20px" }} />
        }
        trendText="This week"
      />
      <StatisticCard
        icon={<NewAssessmentsIcon style={{ width: "40px", height: "40px" }} />}
        title="New Assessments"
        count="22"
        trendText="Average"
        percentage={4}
      />
    </div>
  );
};

export default StatisticCardHolder;
