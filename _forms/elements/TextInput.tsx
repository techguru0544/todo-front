import React from "react";

interface ITextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly label: string;
  readonly error?: string;
}

const TextInput: React.FC<ITextInput> = ({ label, error, ...props }) => {
  return (
    <div>
      <label className="font-bold block mb-3">{label}</label>
      <input
        type="text"
        placeholder="Ex. Brush your teeth"
        className={`form-control ${error ? "error" : "border-gray-700"}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default TextInput;
