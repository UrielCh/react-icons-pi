import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlaceholderLight icon from Phosphor Icons
 * @module
 */
export function PiPlaceholderLight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,14V201.52L54.49,46H208A2,2,0,0,1,210,48ZM46,208V54.48L201.51,210H48A2,2,0,0,1,46,208Z"}}]})(props);
}
export default PiPlaceholderLight;
