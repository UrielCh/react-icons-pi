import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * QuestionMarkThin icon from Phosphor Icons
 * @module
 */
export function PiQuestionMarkThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M188,96c0,27.51-24.77,50.09-56,51.89V160a4,4,0,0,1-8,0V144a4,4,0,0,1,4-4c28.67,0,52-19.74,52-44s-23.33-44-52-44S76,71.74,76,96a4,4,0,0,1-8,0c0-28.67,26.92-52,60-52S188,67.33,188,96ZM128,196a12,12,0,1,0,12,12A12,12,0,0,0,128,196Z"}}]})(props);
}
export default PiQuestionMarkThin;
