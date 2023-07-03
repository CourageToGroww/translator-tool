import { defineConfig } from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import { presetMini } from '@unocss/preset-mini'
import presetTagify  from '@unocss/preset-tagify'
import { presetWind } from '@unocss/preset-wind'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  extractors: [
    extractorSvelte(),
  ],
  shortcuts: [
    { logo: 'i-logos:svelte-icon w-6em h-6em transform transition-800 hover:rotate-180' },
  ],
  presets: [
    presetUno({
      importCSS: true,
      css: `
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&display=swap');
        @keyframes yellowGlow {
          0% {
            background: rgba(0, 0, 0, 0.2);
          }
          50% {
            background: rgba(255, 255, 0, 0.5);
          }
          100% {
            background: rgba(0, 0, 0, 0.2);
          }
        }
      
    `,
      
    }),
    presetMini(),
    presetTagify(),
    presetWind(),
    presetIcons({
      collections: {
        custom: {
          // do not remove LF: testing trimCustomSvg on universal icon loader
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
        'gradient-cool': 'linear-gradient(to right, #84fab0 0%, #8fd3f4 100%)',
      },
      colors: {
        'pastel-green': '#77dd77',
        'coconut-bark': '#6b4226',
        'palm-leaf': '#618a36',
        'sandy-brown': '#f4a460',
        'deep-blue': '#00008b',
        'chalky-blue': '#a9b2c3',
      },
      fontFamily: {
        'chakra': ['Chakra Petch', 'sans-serif'],
        // other font families...
      },
    },
  },
  rules: [
    [/^glass-effect$/, () => ({
      'background': 'rgba(0, 0, 0, .20)', //the last number is the opacity
      'border-radius': '5px',
      'box-shadow': '0 4px 6px 0 rgba(0, 0, 0, 0.07)',
      'shadow-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

    })],
    [/^glass-effect-blue$/, () => ({
      'background': 'rgba(0, 0, 255, 0.25)',  //the last number is the opacity
      'backdrop-filter': 'blur(20px)',
      'border-radius': '5px',
      'box-shadow': '0 4px 6px 0 rgba(0, 0, 0, 0.07)',
      'border': '1px solid rgba(255, 255, 255, 0.2)',
      'shadow-xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    })],
    [/^glass-effect-green$/, () => ({
      'background': 'rgba(152, 251, 152, 0.20)',//the last number is the opacity
      'backdrop-filter': 'blur(20px)',
      'border-radius': '5px',
      'box-shadow': '0 4px 6px 0 rgba(0, 0, 0, 0.07)',
      'shadow-lg': '0 25px 50px -12px rgba(0, 0, 0, 1)',
    })],
    [/^glass-effect-sand$/, () => ({
      'background': 'rgba(0, 125, 125, 0.40)',//the last number is the opacity
      'backdrop-filter': 'blur(5px)',
      'border-radius': '10px',
      'box-shadow': '0 4px 6px 0 rgba(0, 0, 0, 0.07)',
      'border': '1px solid rgba(255, 255, 255, 0.2)',
      'shadow-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    })],
    [/^seethrough-text$/, () => ({
      'color': '#FFFF00',
      'text-shadow': '0 0 5px #FFFF00, 0 0 10px #FFFF00, 0 0 15px #FFFF00, 0 0 20px #FFFF00',
    })],
  ],
})
