import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SquareHalfLight icon from Phosphor Icons
 * @module
 */
export function PiSquareHalfLight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M200,42H56A14,14,0,0,0,42,56V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm-66,76h68v20H134Zm0-12V86h68v20Zm0,44h68v20H134Zm68-94V74H134V54h66A2,2,0,0,1,202,56ZM54,200V56a2,2,0,0,1,2-2h66V202H56A2,2,0,0,1,54,200Zm146,2H134V182h68v18A2,2,0,0,1,200,202Z"}}]})(props);
}
export default PiSquareHalfLight;
