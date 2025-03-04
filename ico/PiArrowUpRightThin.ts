import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpRightThin icon from Phosphor Icons
 * @module
 */
export function PiArrowUpRightThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M196,64V168a4,4,0,0,1-8,0V73.66L66.83,194.83a4,4,0,0,1-5.66-5.66L182.34,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z"}}]})(props);
}
export default PiArrowUpRightThin;
