import SelectBox from "@/@components/ui/SelectBox";
import TextAreaInput from "@/@components/ui/TextAreaInput";
import { unfulfilledRequests } from "./dummydata";

const DietaryRestrictions: React.FC<{
  instructions: string;
  setInstructions: (v: string) => void;
  unfulfilled: string;
  setUnfulfilled: (v: string) => void;
}> = ({ instructions, setInstructions, unfulfilled, setUnfulfilled }) => (
  <div className="rounded-xl shadow-sm p-4 mb-6 border border-pink-200">
    <div className="mb-5">
      <label className="block text-gray-700 font-semibold mb-1">
        Special Instructions
      </label>
      <TextAreaInput
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        className="min-w-full"
        rows={2}
        maxLength={500}
      />
    </div>
    <div>
      <SelectBox
        options={unfulfilledRequests}
        value={unfulfilled}
        onChange={(v) => setUnfulfilled(v as string)}
        className="w-full"
        variant="outlined"
        label="If requests can't be fulfilled"
      >
        <></>
      </SelectBox>
    </div>
  </div>
);

export default DietaryRestrictions;
