import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CellSignalLow icon from Phosphor Icons
 * @module
 */
export function PiCellSignalLow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M88,152v48a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0ZM40,184a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,40,184Z"}}]})(props);
}
export default PiCellSignalLow;
