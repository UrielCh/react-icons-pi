import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function PiBowlingBall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-100a12,12,0,1,1-12-12A12,12,0,0,1,144,116Zm20-12a12,12,0,1,1,12-12A12,12,0,0,1,164,104Zm20,28a12,12,0,1,1-12-12A12,12,0,0,1,184,132Z"}}]})(props);
}
export default PiBowlingBall;
