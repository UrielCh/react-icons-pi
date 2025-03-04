import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BatteryPlusThin icon from Phosphor Icons
 * @module
 */
export function PiBatteryPlusThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M148,128a4,4,0,0,1-4,4H120v24a4,4,0,0,1-8,0V132H88a4,4,0,0,1,0-8h24V100a4,4,0,0,1,8,0v24h24A4,4,0,0,1,148,128Zm72-48v96a20,20,0,0,1-20,20H32a20,20,0,0,1-20-20V80A20,20,0,0,1,32,60H200A20,20,0,0,1,220,80Zm-8,0a12,12,0,0,0-12-12H32A12,12,0,0,0,20,80v96a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm36,12a4,4,0,0,0-4,4v64a4,4,0,0,0,8,0V96A4,4,0,0,0,248,92Z"}}]})(props);
}
export default PiBatteryPlusThin;
