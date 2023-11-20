import Num from "@/Utilities/Num";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { ReactNode } from "react";

export function StatisticsCard({
  icon,
  showCurrency,
  title,
  value,
  footer,
  tooltip,
  suffix,
}: StatisticsCardProps) {
  return (
    <Card className="rounded-none shadow sm:rounded-lg">
      <CardHeader
        variant="gradient"
        color="teal"
        floated={false}
        shadow={false}
        className="absolute grid h-12 w-12 place-items-center"
      >
        {icon}
      </CardHeader>
      <Tooltip content={tooltip} className={!tooltip?'hidden':""} >
        <CardBody className="p-4 pb-2 text-right">
          <Typography
            variant="small"
            className="font-normal text-blue-gray-600"
          >
            {title}
          </Typography>
          <Typography variant="h4" color="blue-gray">
            <Num amount={value} showCurrency={showCurrency} suffix={suffix} />
          </Typography>
        </CardBody>
      </Tooltip>
      {footer && footer.increase !== null && (
        <CardFooter className="border-t border-blue-gray-50 px-4 py-2">
          <Typography className="font-normal text-blue-gray-600">
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
            &nbsp;{footer.label}
          </Typography>
        </CardFooter>
      )}
    </Card>
  );
}

StatisticsCard.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

export interface StatisticsCardProps {
  icon: ReactNode;
  title: string;
  tooltip?: string;
  value: number;
  showCurrency?: boolean;
  suffix?:string;
  footer?: {
    increase: number|null; // +3% / -5%
    label: string; //"than last week";
  };
}

// StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
