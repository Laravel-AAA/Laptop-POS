import { Textarea, TextareaProps } from "@material-tailwind/react";
import { HTMLAttributes, ReactNode } from "react";
import ErrorMessage from "./ErrorMessage";
import HintMessage from "./HintMessage";
import { useTranslation } from "react-i18next";

export default function TextArea({
  color = "teal",
  variant = "outlined",
  size = "lg",
  className = "",
  errorMsg,
  errorMsgProps,
  hideError,
  error,
  hint,
  hintProps,
  label,
  disabled,
  required,
  autoComplete = "off",
  id = label.toLowerCase().replaceAll(/[^\w]/g, "-"), //replace any non word character with dash
  name = label.toLowerCase().replaceAll(/[^\w]/g, "-"),
  ref,
  ...props
}: TextareaProps & {
  label: string;
  required: boolean;
  errorMsg: string | undefined;
  errorMsgProps?: HTMLAttributes<HTMLParagraphElement>;
  hideError: boolean | undefined;
  hint?: string | ReactNode;
  hintProps?: HTMLAttributes<HTMLParagraphElement>;
  disabled: boolean;
}) {
  if (error === undefined) {
    if (hideError === true) error = false;
    else if (errorMsg) error = true;
    else error = false;
  }

  const { t } = useTranslation();
  return (
    <>
      <Textarea
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        id={id}
        name={name}
        label={t(label)}
        aria-label={t(label)}
        className={className + ` focus:ring-0`}
        variant={variant}
        color={color}
        size={size}
        error={error}
        disabled={disabled}
        required={disabled === true ? false : required} //remove the red star of required when disabled.
        {...props}
      />
      <ErrorMessage
        message={typeof errorMsg === "string" ? t(errorMsg) : errorMsg}
        {...errorMsgProps}
      />
      {typeof hint === "string" ? (
        <HintMessage message={t(hint)} {...hintProps} />
      ) : (
        <HintMessage>{hint}</HintMessage>
      )}
    </>
  );
}
