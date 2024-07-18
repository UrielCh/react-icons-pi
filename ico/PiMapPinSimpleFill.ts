import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MapPinSimpleFill icon from Phosphor Icons
 * @module
 */
export function PiMapPinSimpleFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M136,127.42V232a8,8,0,0,1-16,0V127.42a56,56,0,1,1,16,0Z"}}]})(props);
}
export default PiMapPinSimpleFill;
