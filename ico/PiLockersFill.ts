import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LockersFill icon from Phosphor Icons
 * @module
 */
export function PiLockersFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,32H48A16,16,0,0,0,32,48V224a8,8,0,0,0,16,0V208h72v16a8,8,0,0,0,16,0V208h72v16a8,8,0,0,0,16,0V48A16,16,0,0,0,208,32ZM96,112H56a8,8,0,0,1,0-16H96a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16H96a8,8,0,0,1,0,16Zm40,104a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Zm64-72H160a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H160a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}}]})(props);
}
export default PiLockersFill;
