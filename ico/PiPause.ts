import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Pause icon from Phosphor Icons
 * @module
 */
export function PiPause(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"}}]})(props);
}
export default PiPause;
