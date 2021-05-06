export interface FormControl {
  id: string;
  placeholder: string;
  value: string;
  error: JSX.Element | undefined;
  type: string;
}
