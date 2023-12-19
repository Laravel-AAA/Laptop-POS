import { Progress, ProgressProps, Typography } from "@material-tailwind/react";
import {
  color,
  label,
} from "@material-tailwind/react/types/components/progress";
import React, { ReactNode } from "react";

type ProgressWithLabelProps = {
  leftLabel?: ReactNode | string;
  rightLabel?: ReactNode | string;
  progressLabel?: label;
  progressColor?: color;
  /**
   * 0-100
   */
  progress: number;
};

export default function ProgressWithLabel({
  leftLabel,
  rightLabel,
  progressLabel,
  progress,
  progressColor,
}: ProgressWithLabelProps) {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        {leftLabel && (
          <Typography color="blue-gray" variant="h6">
            {leftLabel}
          </Typography>
        )}
        {rightLabel && (
          <Typography color="blue-gray" variant="h6">
            {rightLabel}
          </Typography>
        )}
      </div>
      <Progress color={progressColor} label={progressLabel} value={progress} />
    </div>
  );
}
