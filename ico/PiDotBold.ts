import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DotBold icon from Phosphor Icons
 * @module
 */
export function PiDotBold(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"}}]})(props);
}
export default PiDotBold;
