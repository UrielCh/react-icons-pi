import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SigmaThin icon from Phosphor Icons
 * @module
 */
export function PiSigmaThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M188,72V52H72.32l58.8,73.5a4,4,0,0,1,0,5L72.32,204H188V184a4,4,0,0,1,8,0v24a4,4,0,0,1-4,4H64a4,4,0,0,1-3.12-6.5l62-77.5-62-77.5A4,4,0,0,1,64,44H192a4,4,0,0,1,4,4V72a4,4,0,0,1-8,0Z"}}]})(props);
}
export default PiSigmaThin;
