import {
  Textarea as MaterialTextarea,
  TextareaProps as MaterialTextAreaProps,
} from "@material-tailwind/react";
interface TextAreaProps
  extends Pick<
    MaterialTextAreaProps,
    | "label"
    | "labelProps"
    | "size"
    | "value"
    | "name"
    | "className"
    | "disabled"
    | "onChange"
    | "maxLength"
    | "rows"
    | "onBlur"
    | "resize"
  > {
  error?: string;
}
export default function TextAreaInput({
  label,
  size,
  error,
  value,
  name,
  className,
  disabled,
  onChange,
  maxLength,
  ...rest
}: TextAreaProps) {
  const getRemainingCharacters = (value: string, maxLength: number) => {
    return maxLength - value.length;
  };
  return (
    <div>
      <MaterialTextarea
        labelProps={{
          className: `${
            label ? "focus: material-label-top-border-override" : "hidden"
          }`, // hide label style if not present. otherwise it will display a little empty box between top border
        }}
        name={name}
        value={value}
        label={label}
        size={size}
        error={Boolean(error)}
        className={`min-w-[380px] ${className} ${
          label
            ? "border-none focus:border-none pt-0"
            : "border-none focus:border-none  material-input-override py-0"
        }  ${!error && !label ? "material-input-top-border-override" : ""} ${
          error && !label ? "material-input-error-override" : ""
        }`}
        disabled={disabled}
        onChange={onChange}
        maxLength={maxLength}
        containerProps={{
          className: `${
            error
              ? "border-red-500 focus-within:border-red-500"
              : "border-black-100 focus-within:border-black-500"
          } ${
            label
              ? `pt-3 border-x-[1px] border-b-[1px] ${
                  value
                    ? "border-t-0"
                    : "border-t-[1px] focus-within:border-t-0"
                } `
              : "py-1.5 border-[1px]"
          } rounded-lg`,
        }}
        {...rest}
      />
      {maxLength && !error && value && (
        <p className="text-sm text-gray-500">
          {typeof value === "string" &&
            getRemainingCharacters(value, maxLength)}{" "}
          Character remaining
        </p>
      )}

      <p className="text-sm text-red-500">{error}</p>
    </div>
  );
}
