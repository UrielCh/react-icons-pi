import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Hourglass icon from Phosphor Icons
 * @module
 */
export function PiHourglass(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.6A16.05,16.05,0,0,0,200,75.64ZM184,216H72V180l56-42,56,42.35Zm0-140.36L128,118,72,76V40H184Z"}}]})(props);
}
export default PiHourglass;
