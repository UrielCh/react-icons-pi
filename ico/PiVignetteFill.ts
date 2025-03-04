import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * VignetteFill icon from Phosphor Icons
 * @module
 */
export function PiVignetteFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-16,88c0,30.93-32.24,56-72,56s-72-25.07-72-56,32.24-56,72-56S200,97.07,200,128Z"}}]})(props);
}
export default PiVignetteFill;
