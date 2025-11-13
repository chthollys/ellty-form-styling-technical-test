"use client";

import { cn } from "@/utils/cn";
import type { Item } from "@/utils/types";
import type { ReactNode, ComponentProps } from "react";
import CheckIcon from "../UI/icons/CheckIcon";

interface FormContainerProps extends ComponentProps<"form"> {
  children: ReactNode;
}

interface FormItemProps extends ComponentProps<"div"> {
  item: Item;
}

function Form({ className, children, ...props }: FormContainerProps) {
  return (
    <form className={cn("form-container", className)} {...props}>
      {children}
    </form>
  );
}

function FormDividerLine() {
  return <div className="form-divider" aria-hidden="true"></div>;
}

function FormCheckboxItem({ item }: FormItemProps) {
  return (
    <label className="form-checkbox-item">
      <span>{item.label}</span>
      <input
        id={item.value}
        name={item.value}
        value={item.value}
        type="checkbox"
        className="form-checkbox-native"
        aria-label={item.label}
      />
      <Checkbox />
    </label>
  );
}

export function Checkbox() {
  return (
    <div className="checkbox">
      <CheckIcon />
    </div>
  );
}

function FormButton({ children }: ComponentProps<"button">) {
  return <button className="done-button">{children}</button>;
}

Form.Container = Form;
Form.DividerLine = FormDividerLine;
Form.CheckboxItem = FormCheckboxItem;
Form.Button = FormButton;
export default Form;
