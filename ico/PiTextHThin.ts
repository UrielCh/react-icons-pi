import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TextHThin icon from Phosphor Icons
 * @module
 */
export function PiTextHThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M204,56V200a4,4,0,0,1-8,0V132H60v68a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0v68H196V56a4,4,0,0,1,8,0Z"}}]})(props);
}
export default PiTextHThin;
