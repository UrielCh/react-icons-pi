import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Union icon from Phosphor Icons
 * @module
 */
export function PiUnion(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,64v80a80,80,0,0,1-160,0V64a8,8,0,0,1,16,0v80a64,64,0,0,0,128,0V64a8,8,0,0,1,16,0Z"}}]})(props);
}
export default PiUnion;
