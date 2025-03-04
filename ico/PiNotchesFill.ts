import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NotchesFill icon from Phosphor Icons
 * @module
 */
export function PiNotchesFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M200,40V192a8,8,0,0,1-8,8H40a8,8,0,0,1-5.66-13.66l152-152A8,8,0,0,1,200,40Z"}}]})(props);
}
export default PiNotchesFill;
