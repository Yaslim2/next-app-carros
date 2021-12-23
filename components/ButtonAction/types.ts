import { ButtonHTMLAttributes } from "react";

export type ButtonActionProps = {
  outline?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonActionStyleProps = {
  outline?: boolean;
};
