import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SplitVerticalThin icon from Phosphor Icons
 * @module
 */
export function PiSplitVerticalThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M212,152a4,4,0,0,1-4,4H132v66.34l25.17-25.17a4,4,0,0,1,5.66,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L124,222.34V156H48a4,4,0,0,1,0-8H208A4,4,0,0,1,212,152ZM48,108H208a4,4,0,0,0,0-8H132V33.66l25.17,25.17a4,4,0,1,0,5.66-5.66l-32-32a4,4,0,0,0-5.66,0l-32,32a4,4,0,0,0,5.66,5.66L124,33.66V100H48a4,4,0,0,0,0,8Z"}}]})(props);
}
export default PiSplitVerticalThin;
