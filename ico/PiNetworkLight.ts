import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NetworkLight icon from Phosphor Icons
 * @module
 */
export function PiNetworkLight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M232,114H134V86h10a14,14,0,0,0,14-14V40a14,14,0,0,0-14-14H112A14,14,0,0,0,98,40V72a14,14,0,0,0,14,14h10v28H24a6,6,0,0,0,0,12H58v36H48a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14H80a14,14,0,0,0,14-14V176a14,14,0,0,0-14-14H70V126H186v36H176a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V176a14,14,0,0,0-14-14H198V126h34a6,6,0,0,0,0-12ZM110,72V40a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2V72a2,2,0,0,1-2,2H112A2,2,0,0,1,110,72ZM82,176v32a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2H80A2,2,0,0,1,82,176Zm128,0v32a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2h32A2,2,0,0,1,210,176Z"}}]})(props);
}
export default PiNetworkLight;
