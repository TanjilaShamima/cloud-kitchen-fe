import Input from "./Input";


interface FieldProps {
  title: string;
  label: string;
  description: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorText?: string;
  optionalField?: string;
  disabled?: boolean;
}

export const Field = ({
  title,
  label,
  description,
  value,
  onChange,
  error,
  errorText,
  optionalField,
  disabled,
}: FieldProps) => (
  <div className="flex p-8">
    <div className="text-black-700 w-1/3 pe-8">
      <p className="text-lg font-medium">{title}</p>
      <span className="text-sm">{description}</span>
    </div>
    <div className="w-1/2">
      <Input label={label} value={value} disabled={disabled} onChange={onChange} />
      {error && <p className="text-sm text-red-500">{errorText}</p>}
    </div>
    {optionalField && !disabled && <span className="text-sm pt-5 ms-2">{optionalField}</span>}
  </div>
);
