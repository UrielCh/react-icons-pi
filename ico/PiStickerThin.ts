import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StickerThin icon from Phosphor Icons
 * @module
 */
export function PiStickerThin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M168,36H88A52.06,52.06,0,0,0,36,88v80a52.06,52.06,0,0,0,52,52h48a3.83,3.83,0,0,0,1.26-.21c25.46-8.48,74.05-57.07,82.53-82.53A3.83,3.83,0,0,0,220,136V88A52.06,52.06,0,0,0,168,36ZM44,168V88A44.05,44.05,0,0,1,88,44h80a44.05,44.05,0,0,1,44,44v44H184a52.06,52.06,0,0,0-52,52v28H88A44.05,44.05,0,0,1,44,168Zm96,42V184a44.05,44.05,0,0,1,44-44h26C198.9,162.23,162.23,198.9,140,210Z"}}]})(props);
}
export default PiStickerThin;
