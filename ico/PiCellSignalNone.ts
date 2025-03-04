import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CellSignalNone icon from Phosphor Icons
 * @module
 */
export function PiCellSignalNone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M48,192v8a8,8,0,0,1-16,0v-8a8,8,0,0,1,16,0Z"}}]})(props);
}
export default PiCellSignalNone;
