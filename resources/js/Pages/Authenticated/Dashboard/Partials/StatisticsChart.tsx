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
    <Card className="rounded-none shadow sm:rounded-lg">
      <CardHeader
        variant="gradient"
        color="white"
        floated={false}
        shadow={false}
      >
        <Chart {...chart} />
      </CardHeader>
      <CardBody className="px-6 pt-0">
        <Typography variant="h6" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {description}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-blue-gray-50 px-6 py-5">
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
  series: ApexAxisChartSeries ;
  width?: string | number;
  height?: string | number;
  options?: ApexOptions;
  [key: string]: any;
}



