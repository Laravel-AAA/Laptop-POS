import React, { useMemo } from "react";
import { ChartProps, StatisticsChartProps } from "./StatisticsChart";
import { ApexOptions } from "apexcharts";
import { IDashboard } from "@/types";

export default function useStatisticsChartsData(
  charts: IDashboard["charts"],
): StatisticsChartProps[] {
  return useMemo(() => {
    billsChart.series[0].data = charts.billsDailyCount;
    salesChart.series[0].data = charts.monthlySales;
    cashiersBills.series[0].data = charts.accountsBillsDailyCount.map(
      (v) => v.bills,
    );

    cashiersBills.options.xaxis.categories = charts.accountsBillsDailyCount.map(
      (v) => v.account,
    );

    return [
      {
        title: "Monthly Sales",
        description: "Total sales of current year (Tax included)",
        chart: salesChart,
      },
      {
        title: "Daily Bills",
        description:
          "Number of bills that were created each day of the current week",
        chart: billsChart,
      },
      {
        title: "Cashiers Bills",
        description: "Number of bills that each account created in the past 24 hours",
        chart: cashiersBills,
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
    tickAmount:1,
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

/************************************************************************************************/

const salesChart: ChartProps = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Monthly Sales",
      data: [],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        getMonth(new Date().getMonth() - 11),
        getMonth(new Date().getMonth() - 10),
        getMonth(new Date().getMonth() - 9),
        getMonth(new Date().getMonth() - 8),
        getMonth(new Date().getMonth() - 7),
        getMonth(new Date().getMonth() - 6),
        getMonth(new Date().getMonth() - 5),
        getMonth(new Date().getMonth() - 4),
        getMonth(new Date().getMonth() - 3),
        getMonth(new Date().getMonth() - 2),
        getMonth(new Date().getMonth() - 1),
        getMonth(new Date().getMonth()),
      ],
    },
  },
};

/**
 * Smiler to getWeekDay.
 * @param month is the month of the year (0 to 11) where 0=January, 1=February, ...etc.
 */
function getMonth(month: number): string {
  while (month < 0) month += 12;
  month %= 12;
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
    default:
      throw "Unexpected month! month=" + month;
  }
}

/************************************************************************************************/

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
    colors: ["#44403c"],
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
function getWeekDay(day: number): string {
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

/************************************************************************************************/

const cashiersBills: ChartProps = {
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
    colors: ["#f59e0b"],
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [],
    },
  },
};
