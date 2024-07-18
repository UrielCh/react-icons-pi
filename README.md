# Phosphor Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/pi)](https://jsr.io/@preact-icons/pi)

**License** [MIT](https://raw.githubusercontent.com/phosphor-icons/core/main/LICENSE)

**Project** [https://phosphoricons.com/](https://phosphoricons.com/)

[See available icons here](https://react-icons.deno.dev/pi)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/pi": "jsr:@preact-icons/pi@^1.0.11/mod.ts",
    "react-icons/pi/": "jsr:@preact-icons/pi@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib pi

```ts
import { PiAcornBold } from "jsr:preact-icons/pi@1.0.11/mod.ts"
```

## import_map import an icon from all icons

```ts
import { PiAcornBold } from "react-icons/pi"
```

## import a single icon, downloading just one icon

```ts
import { PiAcornBold } from "react-icons/pi/PiAcornBold.ts"
```

or using default export

```ts
import PiAcornBold from "react-icons/pi/PiAcornBold.ts"
```

