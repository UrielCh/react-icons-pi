import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BatteryPlusLight icon from Phosphor Icons
 * @module
 */
export function PiBatteryPlusLight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M150,128a6,6,0,0,1-6,6H122v22a6,6,0,0,1-12,0V134H88a6,6,0,0,1,0-12h22V100a6,6,0,0,1,12,0v22h22A6,6,0,0,1,150,128Zm72-48v96a22,22,0,0,1-22,22H32a22,22,0,0,1-22-22V80A22,22,0,0,1,32,58H200A22,22,0,0,1,222,80Zm-12,0a10,10,0,0,0-10-10H32A10,10,0,0,0,22,80v96a10,10,0,0,0,10,10H200a10,10,0,0,0,10-10Zm38,10a6,6,0,0,0-6,6v64a6,6,0,0,0,12,0V96A6,6,0,0,0,248,90Z"}}]})(props);
}
export default PiBatteryPlusLight;
