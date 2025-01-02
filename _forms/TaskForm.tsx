"use client";

import React, { FC, useState, useTransition } from "react";
import Image from "next/image";
import plusIcon from "@/public/plus.svg";
import TextInput from "@/_forms/elements/TextInput";
import { todoColors } from "@/theme/colors";
import ColorSelector from "@/_forms/elements/ColorSelector";
import { createTask, updateTask } from "@/_forms/task.action";
import { ITodo } from "@/services/todo";
import { useRouter } from "next/navigation";

interface FormErrors {
  [key: string]: string;
}

const TaskForm: FC<{ data?: ITodo }> = ({ data }) => {
  const router = useRouter();
  const initialFormState: Partial<ITodo> = { title: "", color: "" };

  const [formData, setFormData] = useState<Partial<ITodo>>(
    data?.id ? data : initialFormState,
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string>("");

  const validateField = (name: string, value: string): string => {
    if (name === "title" && value.trim() === "")
      return "Title must not be empty.";
    if (name === "color" && value === "")
      return "Please select at least one color.";
    return "";
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = Object.entries(formData).reduce(
      (acc, [key, value]) => {
        const error = validateField(key, value as string);
        if (error) acc[key] = error;
        return acc;
      },
      {} as FormErrors,
    );

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const resetForm = () => {
    setFormData(data?.id ? formData : initialFormState);
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    startTransition(async () => {
      const responseData = !data?.id
        ? await createTask(formData)
        : await updateTask(data?.id as string, formData);
      if (responseData.status === 201 || responseData.status === 200) {
        setSuccess(responseData.message);
        resetForm();
        setTimeout(() => {
          setSuccess("");
        }, 2000);

        if (responseData.status === 200) {
          setTimeout(() => {
            router.push("/");
          }, 3000);
        }
      } else {
        setSuccess("");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {success && (
        <div className="bg-green-900 px-6 py-4 rounded-md text-center">
          {success}
        </div>
      )}
      <TextInput
        label="Title"
        placeholder="Ex. Brush your teeth"
        name="title"
        value={formData.title}
        onChange={(e) => handleChange("title", e.target.value)}
        error={errors.title}
      />
      <ColorSelector
        selectedColor={formData.color as string}
        onColorChange={(colorCode) => handleChange("color", colorCode)}
        colors={todoColors}
        error={errors.color}
      />
      <div className="mt-8">
        <button
          type="submit"
          className="flex items-center justify-center gap-4 w-full btn-primary"
          disabled={isPending}
        >
          {isPending ? (
            <span>Processing...</span>
          ) : (
            <>
              <span>{data?.id ? "Update" : "Add"} Task</span>
              {!data?.id && (
                <Image width={15} height={15} src={plusIcon} alt="Plus" />
              )}
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
