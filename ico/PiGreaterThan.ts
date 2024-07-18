import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GreaterThan icon from Phosphor Icons
 * @module
 */
export function PiGreaterThan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,128a8,8,0,0,1-4.58,7.23l-152,72a8,8,0,1,1-6.85-14.46L197.31,128,60.58,63.23a8,8,0,1,1,6.85-14.46l152,72A8,8,0,0,1,224,128Z"}}]})(props);
}
export default PiGreaterThan;
