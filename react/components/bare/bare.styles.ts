import { style } from "@morajlab/react.utils.style";
import type { IBareStyleProps } from "./bare.types";

export const Styles = (_props?: IBareStyleProps) => {
  return {
    root: style({}),
  };
};

export default Styles;
