import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CornersOutLight icon from Phosphor Icons
 * @module
 */
export function PiCornersOutLight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M214,48V88a6,6,0,0,1-12,0V54H168a6,6,0,0,1,0-12h40A6,6,0,0,1,214,48ZM88,202H54V168a6,6,0,0,0-12,0v40a6,6,0,0,0,6,6H88a6,6,0,0,0,0-12Zm120-40a6,6,0,0,0-6,6v34H168a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V168A6,6,0,0,0,208,162ZM88,42H48a6,6,0,0,0-6,6V88a6,6,0,0,0,12,0V54H88a6,6,0,0,0,0-12Z"}}]})(props);
}
export default PiCornersOutLight;
