import React from "react";
import Button from "@/@components/ui/Button";
import Input from "@/@components/ui/Input";

const PromoCodeInput: React.FC<{
  value: string;
  onChange: (val: string) => void;
  onApply: () => void;
  applied: boolean;
}> = ({ value, onChange, onApply, applied }) => (
  <div className="flex gap-2 my-4">
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Ex: COOKIE20"
      label="Promo Code"
      className="flex-1"
      disabled={applied}
    />
    <Button
      variant="filled"
      onClick={onApply}
      disabled={applied || !value}
      className="transition"
    >
      {applied ? "Applied" : "Apply"}
    </Button>
  </div>
);

export default PromoCodeInput;
