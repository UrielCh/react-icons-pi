import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpLeftThin icon from Phosphor Icons
 * @module
 */
export function PiArrowUpLeftThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M194.83,194.83a4,4,0,0,1-5.66,0L68,73.66V168a4,4,0,0,1-8,0V64a4,4,0,0,1,4-4H168a4,4,0,0,1,0,8H73.66L194.83,189.17A4,4,0,0,1,194.83,194.83Z"}}]})(props);
}
export default PiArrowUpLeftThin;
