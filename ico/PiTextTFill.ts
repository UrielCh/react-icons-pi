import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TextTFill icon from Phosphor Icons
 * @module
 */
export function PiTextTFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,96a8,8,0,0,1-16,0V88H136v88h12a8,8,0,0,1,0,16H108a8,8,0,0,1,0-16h12V88H88v8a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"}}]})(props);
}
export default PiTextTFill;
