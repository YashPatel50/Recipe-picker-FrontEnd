import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        borderColor: {
          primary: { value: {_light: "gray.200", _dark: "white" }},
        },
        'text-error': {
          value: '#ff3333'
        }
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)