import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LockersThin icon from Phosphor Icons
 * @module
 */
export function PiLockersThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M188,72a4,4,0,0,1-4,4H160a4,4,0,0,1,0-8h24A4,4,0,0,1,188,72Zm-4,28H160a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8ZM72,76H96a4,4,0,0,0,0-8H72a4,4,0,0,0,0,8Zm24,24H72a4,4,0,0,0,0,8H96a4,4,0,0,0,0-8ZM220,48V224a4,4,0,0,1-8,0V204H132v20a4,4,0,0,1-8,0V204H44v20a4,4,0,0,1-8,0V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48ZM124,196V44H48a4,4,0,0,0-4,4V196Zm8,0h80V48a4,4,0,0,0-4-4H132Z"}}]})(props);
}
export default PiLockersThin;
