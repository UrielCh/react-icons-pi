import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * WallDuotone icon from Phosphor Icons
 * @module
 */
export function PiWallDuotone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,104H32V56h96Zm48,0v48H128v48h96V104Z","opacity":"0.2"}},{tag:"path",attr:{d:"M224,48H32a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM88,144V112h80v32Zm-48,0V112H72v32Zm144-32h32v32H184Zm32-16H136V64h80ZM120,64V96H40V64ZM40,160h80v32H40Zm96,32V160h80v32Z"},child:[]}]})(props);
}
export default PiWallDuotone;
