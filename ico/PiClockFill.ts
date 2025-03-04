import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ClockFill icon from Phosphor Icons
 * @module
 */
export function PiClockFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}}]})(props);
}
export default PiClockFill;
