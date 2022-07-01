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
    presetIcons({ scale: 2 }),
    // presetWebFonts(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
