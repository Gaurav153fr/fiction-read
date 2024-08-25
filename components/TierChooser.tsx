import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dispatch, SetStateAction } from "react";

export function TierChooser({
  setPremium,
}: {
  setPremium: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <RadioGroup
      defaultValue="Free"
      onValueChange={(e) => setPremium(e === "Premium")}
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="Free" id="r1" />
        <Label htmlFor="r1">Free</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="Premium" id="r2" />
        <Label htmlFor="r2">Premium</Label>
      </div>
    </RadioGroup>
  );
}
