import TickIcon from "@/@icons/tick-icon.svg";

interface CheckboxProps {
  name: string;
  checked: boolean;
  id: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <div className="flex gap-2 -mt-1">
      <input
        className={`
                    ${props.className}
                    peer relative appearance-none shrink-0 w-5 h-5 rounded-sm mt-1 bg-white
                    focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
                    checked:bg-pink-400 checked:border-0
                    disabled:border-steel-400 disabled:bg-steel-400 cursor-pointer
                `}
        type="checkbox"
        name={props.name}
        checked={props.checked}
        id={props.id}
        onChange={props.onChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        width="24"
        height="24"
        className="absolute w-5 h-5 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
};

export default Checkbox;
