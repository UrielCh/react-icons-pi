import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDownLight icon from Phosphor Icons
 * @module
 */
export function PiArrowDownLight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M204.24,148.24l-72,72a6,6,0,0,1-8.48,0l-72-72a6,6,0,0,1,8.48-8.48L122,201.51V40a6,6,0,0,1,12,0V201.51l61.76-61.75a6,6,0,0,1,8.48,8.48Z"}}]})(props);
}
export default PiArrowDownLight;
