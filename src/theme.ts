import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        borderColor: {
          primary: { value: "white" },
        },
        bg: {
          primary: {value: 'red'}
        }
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)