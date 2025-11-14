"use client";

import Form from "@/src/components/Form";
import type { Item } from "@/utils/types";
import { ChangeEvent, useState } from "react";

type FormState = Record<string, boolean>;

const items: Item[] = [
  { label: "Page 1", value: "page-1" },
  { label: "Page 2", value: "page-2" },
  { label: "Page 3", value: "page-3" },
  { label: "Page 4", value: "page-4" },
];

function generateInitialState(items: Item[]): FormState {
  const valueArr = items.map((item) => item.value);
  const result: FormState = {};
  valueArr.forEach((value) => (result[value] = false));
  return result;
}
const initialState = generateInitialState(items);

export default function QuickForm() {
  const [state, setState] = useState<FormState>(initialState);

  function formAction(formData: FormData) {
    const data = Object.fromEntries(formData);
    const nextState: FormState = {};

    for (const key of Object.keys(initialState)) {
      if (data[key]) {
        nextState[key] = true;
      } else {
        nextState[key] = false;
      }
    }

    // console.table(nextState);
    setState(initialState);
  }

  const allChecked = Object.values(state).every(Boolean);
  const handleAllPageChange = () => {
    const nextValue = !allChecked;
    setState((prev) =>
      Object.fromEntries(Object.keys(prev).map((key) => [key, nextValue]))
    );
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const keyname = e.target.value;
    setState((prev) => ({ ...prev, [keyname]: !prev[keyname] }));
  };

  return (
    <div className="quick-form">
      <Form.Container className="form-bordered" action={formAction}>
        <Form.CheckboxItem
          item={{ label: "All pages", value: "all-pages" }}
          checked={allChecked}
          onChange={handleAllPageChange}
        />
        <Form.DividerLine />
        <div className="form-checkbox-container">
          {items.map((item) => (
            <Form.CheckboxItem
              key={item.value}
              item={item}
              checked={state[item.value]}
              onChange={handleOnChange}
            />
          ))}
        </div>
        <Form.DividerLine />
        <Form.Button>Done</Form.Button>
      </Form.Container>
    </div>
  );
}
