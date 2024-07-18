import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CellSignalFullFill icon from Phosphor Icons
 * @module
 */
export function PiCellSignalFullFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,40V200a16,16,0,0,1-16,16H32A16,16,0,0,1,20.7,188.68l160-160A16,16,0,0,1,208,40Z"}}]})(props);
}
export default PiCellSignalFullFill;
