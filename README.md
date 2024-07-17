# Phosphor Icons icons for deno / Preact

**License** [MIT](https://raw.githubusercontent.com/phosphor-icons/core/main/LICENSE)

**Project** [https://phosphoricons.com/](https://phosphoricons.com/)

[See available icons here](https://react-icons.deno.dev/pi)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.22.1",
    "preact/": "https://esm.sh/preact@10.22.1/",
    "react-icons/pi":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-pi@1.0.10/mod.ts",
    "react-icons/pi/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-pi@1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib pi

```ts
import { PiAcornBold } from "https://deno.land/x/react_icons_pi@1.0.10/mod.ts"
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

