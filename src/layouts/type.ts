import { ReactElement } from "react";

export type Layout = (props: LayoutProps) => ReactElement;

export interface LayoutProps {
  children: JSX.Element;
}
