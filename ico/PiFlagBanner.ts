import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FlagBanner icon from Phosphor Icons
 * @module
 */
export function PiFlagBanner(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M238.76,51.73A8,8,0,0,0,232,48H40a8,8,0,0,0-5.66,13.66L76.69,104,34.34,146.34A8,8,0,0,0,40,160H173.62l-28.84,60.56a8,8,0,1,0,14.44,6.88l80-168A8,8,0,0,0,238.76,51.73ZM181.23,144H59.31l34.35-34.34a8,8,0,0,0,0-11.32L59.31,64h160Z"}}]})(props);
}
export default PiFlagBanner;
