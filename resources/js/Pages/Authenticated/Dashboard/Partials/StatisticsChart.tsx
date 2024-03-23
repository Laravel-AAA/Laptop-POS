import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { ApexOptions } from "apexcharts";
import { ReactNode } from "react";
import Chart from "react-apexcharts";

export function StatisticsChart({
  chart,
  title,
  description,
  footer,
}: StatisticsChartProps) {
  return (
    <Card
      className="rounded-none shadow sm:rounded-lg"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader
        variant="gradient"
        color="white"
        floated={false}
        shadow={false}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Chart {...chart} />
      </CardHeader>
      <CardBody
        className="px-6 pt-0"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="h6"
          color="blue-gray"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {title}
        </Typography>
        <Typography
          variant="small"
          className="font-normal text-blue-gray-600"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {description}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter
          className="border-t border-blue-gray-50 px-6 py-5"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

export interface StatisticsChartProps {
  chart: ChartProps;
  title: string;
  description: string | ReactNode;
  footer?: ReactNode;
}

export interface ChartProps {
  type?:
    | "line"
    | "area"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap";
  series: ApexAxisChartSeries;
  width?: string | number;
  height?: string | number;
  options: ApexOptions & {
    xaxis: Exclude<ApexOptions["xaxis"] & { categories: string[] }, undefined>;
  };
  [key: string]: any;
}
