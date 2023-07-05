import { defineConfig } from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import presetMini from '@unocss/preset-mini'
import presetTagify  from '@unocss/preset-tagify'
import presetWind  from '@unocss/preset-wind'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  extractors: [
    extractorSvelte(),
  ],
  presets: [
    presetUno(),
    presetMini(),
    presetTagify(),
    presetWind(),
    presetIcons({
      collections: {
        custom: {
          circle: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
<circle cx="60" cy="60" r="50"/>
</svg>
`,
        },
        customfsl: FileSystemIconLoader(
          './icons',
          svg => svg.replace('<svg ', '<svg fill="currentColor" '),
        ),
      },
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
      },
      fontFamily: {
        'chakra': ['Chakra Petch', 'sans-serif'],
        'press-start': ['Press Start 2P', 'cursive'],
      },
      
    },
  },
  rules: [
    [/^btn-glass-effect$/, () => ({
      'background': 'rgba(0, 0, 0, .10)', //the last number is the opacity
      'border-radius': '5px',
      'box-shadow': '0 4px 6px 0 rgba(0, 0, 0, 0.07)',
      'shadow-xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

    })],
    [/^glass-effect$/, () => ({
      'background': 'rgba(0, 0, 0, .20)', //the last number is the opacity
      'box-shadow': '0 4px 6px 0 rgba(0, 0, 0, 0.07)',
      'shadow-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

    })],
  ],
})
