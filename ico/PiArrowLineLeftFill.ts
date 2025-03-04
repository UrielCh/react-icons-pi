import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowLineLeftFill icon from Phosphor Icons
 * @module
 */
export function PiArrowLineLeftFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M48,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm176,80H152V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,152,200V136h72a8,8,0,0,0,0-16Z"}}]})(props);
}
export default PiArrowLineLeftFill;
