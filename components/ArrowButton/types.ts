import { ButtonHTMLAttributes } from "react";

export type ArrowButtonProps = {
  forward?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ArrowButtonStyleProps = {
  forward?: boolean;
};
