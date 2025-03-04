import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tilde icon from Phosphor Icons
 * @module
 */
export function PiTilde(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M222.23,130.59c-14.51,18-28.84,27.6-43.8,29.17a43,43,0,0,1-4.5.24c-19.3,0-35.39-13.1-51-25.8-14.91-12.14-29-23.61-43.7-22-10.51,1.1-21.31,8.72-33,23.28a8,8,0,0,1-12.46-10c14.51-18,28.84-27.6,43.8-29.17,21.32-2.25,38.69,11.89,55.48,25.56,14.91,12.14,29,23.62,43.7,22,10.51-1.1,21.31-8.72,33-23.28a8,8,0,1,1,12.46,10Z"}}]})(props);
}
export default PiTilde;
