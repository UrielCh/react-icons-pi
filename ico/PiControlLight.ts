import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ControlLight icon from Phosphor Icons
 * @module
 */
export function PiControlLight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M204.24,124.24a6,6,0,0,1-8.48,0L128,56.49,60.24,124.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0l72,72A6,6,0,0,1,204.24,124.24Z"}}]})(props);
}
export default PiControlLight;
