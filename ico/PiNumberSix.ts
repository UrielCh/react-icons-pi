import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NumberSix icon from Phosphor Icons
 * @module
 */
export function PiNumberSix(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,104a56,56,0,0,0-15.62,2.23L143,51.93A8,8,0,1,0,129,44.08l-49.55,88A56,56,0,1,0,128,104Zm0,96a40,40,0,1,1,40-40A40,40,0,0,1,128,200Z"}}]})(props);
}
export default PiNumberSix;
