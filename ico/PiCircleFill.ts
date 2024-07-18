import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleFill icon from Phosphor Icons
 * @module
 */
export function PiCircleFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"}}]})(props);
}
export default PiCircleFill;
