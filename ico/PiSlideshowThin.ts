import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SlideshowThin icon from Phosphor Icons
 * @module
 */
export function PiSlideshowThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M192,52H64A12,12,0,0,0,52,64V192a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V64A12,12,0,0,0,192,52Zm4,140a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4ZM236,56V200a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0ZM28,56V200a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0Z"}}]})(props);
}
export default PiSlideshowThin;
