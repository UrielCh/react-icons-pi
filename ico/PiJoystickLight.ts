import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * JoystickLight icon from Phosphor Icons
 * @module
 */
export function PiJoystickLight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,146H134V93.52a38,38,0,1,0-12,0V146H48a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V160A14,14,0,0,0,208,146ZM102,56a26,26,0,1,1,26,26A26,26,0,0,1,102,56ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V160a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-42-94h32a6,6,0,0,1,0,12H168a6,6,0,0,1,0-12Z"}}]})(props);
}
export default PiJoystickLight;
