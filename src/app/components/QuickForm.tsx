"use client";

import Form from "@/src/components/Form";
import type { Item } from "@/utils/types";

const items: Item[] = [
  { label: "Page 1", value: "page-1" },
  { label: "Page 2", value: "page-2" },
  { label: "Page 3", value: "page-3" },
  { label: "Page 4", value: "page-4" },
];

export default function QuickForm() {
  return (
    <div className="quick-form">
      <Form.Container className="form-bordered">
        <Form.CheckboxItem item={{ label: "All pages", value: "all-pages" }} />
        <Form.DividerLine />
        <div className="form-checkbox-container">
          {items.map((item) => (
            <Form.CheckboxItem key={item.value} item={item} />
          ))}
        </div>
        <Form.DividerLine />
        <Form.Button>Done</Form.Button>
      </Form.Container>
    </div>
  );
}
