import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FilmScript icon from Phosphor Icons
 * @module
 */
export function PiFilmScript(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200V216ZM96,76A12,12,0,1,1,84,64,12,12,0,0,1,96,76Zm0,104a12,12,0,1,1-12-12A12,12,0,0,1,96,180Zm0-52a12,12,0,1,1-12-12A12,12,0,0,1,96,128Z"}}]})(props);
}
export default PiFilmScript;
