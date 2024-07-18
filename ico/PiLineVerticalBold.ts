import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LineVerticalBold icon from Phosphor Icons
 * @module
 */
export function PiLineVerticalBold(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M140,24V232a12,12,0,0,1-24,0V24a12,12,0,0,1,24,0Z"}}]})(props);
}
export default PiLineVerticalBold;
