import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * WaveSawtooth icon from Phosphor Icons
 * @module
 */
export function PiWaveSawtooth(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M236.19,134.81l-104,64A8,8,0,0,1,120,192V78.32L28.19,134.81a8,8,0,0,1-8.38-13.62l104-64A8,8,0,0,1,136,64V177.68l91.81-56.49a8,8,0,0,1,8.38,13.62Z"}}]})(props);
}
export default PiWaveSawtooth;
