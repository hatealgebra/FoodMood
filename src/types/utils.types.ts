import { FieldInputProps } from "formik";

export type SortByOptions =
  | "default"
  | "cals-low-hight"
  | "cals-high-low"
  | "time-low-hight"
  | "time-high-low";

export interface IFieldInput {
  field: FieldInputProps<any>;
  form: any;
}
