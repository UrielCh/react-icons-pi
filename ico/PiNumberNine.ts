import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NumberNine icon from Phosphor Icons
 * @module
 */
export function PiNumberNine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,40a56,56,0,1,0,15.62,109.77L113,204.07A8,8,0,1,0,127,211.92l49.55-88A56,56,0,0,0,128,40Zm0,96a40,40,0,1,1,40-40A40,40,0,0,1,128,136Z"}}]})(props);
}
export default PiNumberNine;
