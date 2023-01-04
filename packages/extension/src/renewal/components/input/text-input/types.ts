import { CSSProperties } from "react";

export interface TextInputProps {
  label?: string;
  paragraph?: string;
  error?: string;

  className?: string;
  style?: CSSProperties;
}
