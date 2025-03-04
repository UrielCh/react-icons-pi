import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PathThin icon from Phosphor Icons
 * @module
 */
export function PiPathThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M200,172a28,28,0,0,0-27.71,24H72a36,36,0,0,1,0-72h96a36,36,0,0,0,0-72H72a4,4,0,0,0,0,8h96a28,28,0,0,1,0,56H72a44,44,0,0,0,0,88H172.29A28,28,0,1,0,200,172Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,200,220Z"}}]})(props);
}
export default PiPathThin;
