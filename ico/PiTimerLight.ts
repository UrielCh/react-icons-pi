import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TimerLight icon from Phosphor Icons
 * @module
 */
export function PiTimerLight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,42a94,94,0,1,0,94,94A94.11,94.11,0,0,0,128,42Zm0,176a82,82,0,1,1,82-82A82.1,82.1,0,0,1,128,218ZM172.24,91.76a6,6,0,0,1,0,8.48l-40,40a6,6,0,1,1-8.48-8.48l40-40A6,6,0,0,1,172.24,91.76ZM98,16a6,6,0,0,1,6-6h48a6,6,0,0,1,0,12H104A6,6,0,0,1,98,16Z"}}]})(props);
}
export default PiTimerLight;
