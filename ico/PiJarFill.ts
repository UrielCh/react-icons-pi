import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * JarFill icon from Phosphor Icons
 * @module
 */
export function PiJarFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM120,48V32h16V48Zm48,0H152V32h16ZM104,32V48H88V32Z"}}]})(props);
}
export default PiJarFill;
