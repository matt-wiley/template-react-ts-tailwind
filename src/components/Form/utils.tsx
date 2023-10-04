

/**
 * Enum for input states that can be used to style the input.
 */
export enum InputState {
  Empty = 'empty',
  Disabled = 'disabled',
  Valid = 'valid',
  Invalid = 'invalid'
}

export interface InputProps {
  onChange: (value: string) => void;
  type?: string;
  label?: string;
  value?: string;
  state?: InputState | string;
  placeholder?: string;
}