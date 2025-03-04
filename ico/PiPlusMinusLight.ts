import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlusMinusLight icon from Phosphor Icons
 * @module
 */
export function PiPlusMinusLight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M204.24,60.24l-144,144a6,6,0,0,1-8.48-8.48l144-144a6,6,0,0,1,8.48,8.48ZM66,112a6,6,0,0,0,12,0V78h34a6,6,0,0,0,0-12H78V32a6,6,0,0,0-12,0V66H32a6,6,0,0,0,0,12H66Zm158,66H144a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12Z"}}]})(props);
}
export default PiPlusMinusLight;
