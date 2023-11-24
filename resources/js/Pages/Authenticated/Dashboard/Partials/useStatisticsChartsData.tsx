import React, { useMemo } from "react";
import { ChartProps, StatisticsChartProps } from "./StatisticsChart";
import { ApexOptions } from "apexcharts";
import { IDashboard } from "@/types";

export default function useStatisticsChartsData(
  charts: IDashboard["charts"],
): StatisticsChartProps[] {
  return useMemo(() => {
    billsChart.series[0].data = charts.billsDailyCount;
    return [
      {
        title: "Bills",
        description: "Number of bills created each day within this week",
        // footer: "campaign sent 2 days ago",
        chart: billsChart,
      },
      {
        title: "Checkouts",
        description: "Daily checkouts number of current week",
        // footer: "campaign sent 2 days ago",
        chart: billsChart,
      },
      {
        title: "Checkouts",
        description: "Daily checkouts number of current week",
        // footer: "campaign sent 2 days ago",
        chart: billsChart,
      },
    ];
  }, []);
}

const chartsConfig: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  title: {
    text: "",
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#37474f",
        fontSize: "13px",
        fontFamily: "inherit",
        fontWeight: 300,
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#37474f",
        fontSize: "13px",
        fontFamily: "inherit",
        fontWeight: 300,
      },
    },
  },
  grid: {
    show: true,
    borderColor: "#ddd",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 5,
      right: 20,
    },
  },
  fill: {
    opacity: 0.8,
  },
  tooltip: {
    theme: "dark",
  },
};

const billsChart: ChartProps = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Bills",
      data: [],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#44403c" as any,
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        getWeekDay(new Date().getDay() - 6),
        getWeekDay(new Date().getDay() - 5),
        getWeekDay(new Date().getDay() - 4),
        getWeekDay(new Date().getDay() - 3),
        getWeekDay(new Date().getDay() - 2),
        getWeekDay(new Date().getDay() - 1),
        getWeekDay(new Date().getDay()),
      ],
    },
  },
};

/** @param day is the day of the week (0 to 6) where 0=Sunday, 1=Monday, ...etc.
 * It uses modulo to get a value from 0 to 6 if the day value is out of boundary so you can pass:
 * day=7 => day=0.
 * day=-1=> day=6.
 * */

function getWeekDay(day: number) {
  while (day < 0) day += 7;
  day %= 7;
  switch (day) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
    default:
      throw "Unexpected day of week! day=" + day;
  }
}
