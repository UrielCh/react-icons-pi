import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MinusSquareFill icon from Phosphor Icons
 * @module
 */
export function PiMinusSquareFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM168,136H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Z"}}]})(props);
}
export default PiMinusSquareFill;
