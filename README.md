```sh
yarn create quasar
```

Select quasar wih typescript

```sh
yarn add -D unocss
```

Create unocss.config.ts and add the code block below

```js
import {
  defineConfig,
  presetUno,
  presetIcons,
  // presetWebFonts,
  presetAttributify,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetIcons({ scale: 1 }),
    // presetWebFonts(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
```

create a boot file with name **unocss.js**

```js
import 'uno.css';
```

add the boot section of quasar.config.js

```js
boot: ['unocss'];
```

To auto import refs, defineProps, reactive etc.

```sh
yarn add -D unplugin-auto-import
```

Add the code below to the vitePlugins section of quasar.config.js

```js
['unplugin-auto-import/vite',{
	imports: ['vue', 'pinia', 'vue-router', {
			quasar: ['useQuasar', 'useMeta'],
			axios: [['default', 'axios']],},
],
dts: true,
},],
```

To add components automatically

```sh
yarn add -D unplugin-vue-components
```

Add. the code below to the vitePlugin section of quasar.config.js

```js
['unplugin-vue-components/vite', { dts: true },],
```

To add icon collection to use:

```sh
yarn add -D @unocss/preset-icons @iconify-json/[the-collection-you-want]
```

add then use like this

```js
<div class="i-ion-logo-twitter" />
```
