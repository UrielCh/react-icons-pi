import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BatteryPlusBold icon from Phosphor Icons
 * @module
 */
export function PiBatteryPlusBold(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M152,128a12,12,0,0,1-12,12H128v12a12,12,0,0,1-24,0V140H92a12,12,0,0,1,0-24h12V104a12,12,0,0,1,24,0v12h12A12,12,0,0,1,152,128Zm72-48v96a28,28,0,0,1-28,28H28A28,28,0,0,1,0,176V80A28,28,0,0,1,28,52H196A28,28,0,0,1,224,80Zm-24,0a4,4,0,0,0-4-4H28a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4H196a4,4,0,0,0,4-4Zm44,12a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V104A12,12,0,0,0,244,92Z"}}]})(props);
}
export default PiBatteryPlusBold;
