# Phosphor Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/pi)](https://jsr.io/@preact-icons/pi)

**License** [MIT](https://raw.githubusercontent.com/phosphor-icons/core/main/LICENSE)

**Project** [https://phosphoricons.com/](https://phosphoricons.com/)

[See available icons here](https://react-icons.deno.dev/pi)

## install the module

```bash
deno add @preact-icons/pi
dnpx jsr add @preact-icons/pi
pnpm dlx jsr add @preact-icons/pi
bunx jsr add @preact-icons/pi
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { PiAcornBold } from "@preact-icons/pi"
```

## import a single icon, downloading just one icon

```ts
import { PiAcornBold } from "react-icons/pi/PiAcornBold"
```

or using default export

```ts
import PiAcornBold from "react-icons/pi/PiAcornBold.ts"
```
