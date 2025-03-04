import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CaretDownFill icon from Phosphor Icons
 * @module
 */
export function PiCaretDownFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}}]})(props);
}
export default PiCaretDownFill;
