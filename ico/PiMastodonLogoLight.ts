import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MastodonLogoLight icon from Phosphor Icons
 * @module
 */
export function PiMastodonLogoLight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M184,34H72A38,38,0,0,0,34,72V192a38,38,0,0,0,38,38h88a6,6,0,0,0,0-12H72a26,26,0,0,1-26-26V182H184a38,38,0,0,0,38-38V72A38,38,0,0,0,184,34Zm26,110a26,26,0,0,1-26,26H46V72A26,26,0,0,1,72,46H184a26,26,0,0,1,26,26Zm-28-40v32a6,6,0,0,1-12,0V104a18,18,0,0,0-36,0v32a6,6,0,0,1-12,0V104a18,18,0,0,0-36,0v32a6,6,0,0,1-12,0V104a30,30,0,0,1,54-18,30,30,0,0,1,54,18Z"}}]})(props);
}
export default PiMastodonLogoLight;
