import Num from "@/Utilities/Num";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export function StatisticsCard({
  icon,
  showCurrency,
  title,
  value,
  footer,
  tooltip,
  suffix,
}: StatisticsCardProps) {
  const { t } = useTranslation();
  return (
    <Card
      className="rounded-none shadow sm:rounded-lg"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader
        variant="gradient"
        color="teal"
        floated={false}
        shadow={false}
        className="absolute grid h-12 w-12 place-items-center"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {icon}
      </CardHeader>
      <Tooltip
        content={tooltip && t(tooltip)}
        className={!tooltip ? "hidden" : ""}
      >
        <CardBody
          className="p-4 pb-2 text-right"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Typography
            variant="small"
            className="font-normal text-blue-gray-600"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {t(title)}
          </Typography>
          <Typography
            variant="h4"
            color="blue-gray"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Num amount={value} showCurrency={showCurrency} suffix={suffix} />
          </Typography>
        </CardBody>
      </Tooltip>
      {footer && footer.increase !== null && (
        <CardFooter
          className="border-t border-blue-gray-50 px-4 py-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Typography
            className="font-normal text-blue-gray-600"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <strong
              className={
                footer.increase > 0
                  ? "text-green-500"
                  : footer.increase < 0
                    ? "text-danger-500"
                    : ""
              }
            >
              {footer.increase > 0 && "+"}
              <Num amount={footer.increase} suffix="%" />
            </strong>
            &nbsp;{t(footer.label)}
          </Typography>
        </CardFooter>
      )}
    </Card>
  );
}

export interface StatisticsCardProps {
  icon: ReactNode;
  title: string;
  tooltip?: string;
  value: number;
  showCurrency?: boolean;
  suffix?: string;
  footer?: {
    increase: number | null; // +3% / -5%
    label: string; //"than last week";
  };
}
