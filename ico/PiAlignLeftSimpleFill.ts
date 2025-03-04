import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlignLeftSimpleFill icon from Phosphor Icons
 * @module
 */
export function PiAlignLeftSimpleFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M40,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM224,80H72A16,16,0,0,0,56,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80Z"}}]})(props);
}
export default PiAlignLeftSimpleFill;
