import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ClipboardFill icon from Phosphor Icons
 * @module
 */
export function PiClipboardFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"}}]})(props);
}
export default PiClipboardFill;
