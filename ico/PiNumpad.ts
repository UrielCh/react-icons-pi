import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Numpad icon from Phosphor Icons
 * @module
 */
export function PiNumpad(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M80,48A16,16,0,1,1,64,32,16,16,0,0,1,80,48Zm48-16a16,16,0,1,0,16,16A16,16,0,0,0,128,32Zm64,32a16,16,0,1,0-16-16A16,16,0,0,0,192,64ZM64,88a16,16,0,1,0,16,16A16,16,0,0,0,64,88Zm64,0a16,16,0,1,0,16,16A16,16,0,0,0,128,88Zm64,0a16,16,0,1,0,16,16A16,16,0,0,0,192,88ZM64,144a16,16,0,1,0,16,16A16,16,0,0,0,64,144Zm64,0a16,16,0,1,0,16,16A16,16,0,0,0,128,144Zm0,56a16,16,0,1,0,16,16A16,16,0,0,0,128,200Zm64-56a16,16,0,1,0,16,16A16,16,0,0,0,192,144Z"}}]})(props);
}
export default PiNumpad;
