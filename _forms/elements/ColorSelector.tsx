import React from "react";
import { ITodoColors } from "@/theme/colors";
import Image from "next/image";
import CheckIcon from "@/public/check.svg";

interface ColorSelectorProps {
  selectedColor: string;
  onColorChange: (colorCode: string) => void;
  colors: ITodoColors[];
  error?: string;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  selectedColor,
  onColorChange,
  colors,
  error,
}) => {
  return (
    <div>
      <label className="font-bold block mb-3">Color</label>
      <div className="flex items-center justify-start gap-3">
        {colors.map((color) => (
          <div
            key={color.code}
            className={`w-[52px] h-[52px] rounded-full cursor-pointer transition-all flex items-center justify-center ${
              selectedColor === color.code ? "selectedColor" : ""
            } ${error && !selectedColor ? "border-red-500" : ""}`}
            style={{ background: color.code }}
            onClick={() => onColorChange(color.code)}
          >
            {selectedColor === color.code && (
              <Image width={25} height={25} src={CheckIcon} alt="Checked" />
            )}
          </div>
        ))}
      </div>
      {error && !selectedColor && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
};

export default ColorSelector;
