import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MedalThin icon from Phosphor Icons
 * @module
 */
export function PiMedalThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M212,96A84,84,0,1,0,76,161.9V240a4,4,0,0,0,4,4,4.05,4.05,0,0,0,1.79-.42L128,220.47l46.22,23.11A4,4,0,0,0,180,240V161.9A83.89,83.89,0,0,0,212,96ZM172,233.53l-42.22-21.11a4,4,0,0,0-3.58,0L84,233.53v-66a83.8,83.8,0,0,0,88,0ZM128,172a76,76,0,1,1,76-76A76.08,76.08,0,0,1,128,172Zm0-128a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,44Zm0,96a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,140Z"}}]})(props);
}
export default PiMedalThin;
