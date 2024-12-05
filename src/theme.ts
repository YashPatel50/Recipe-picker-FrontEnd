import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#0FEE0F" },
        secondary: { value: "#EE0F0F" },
      },
    }
  },
})

export const system = createSystem(defaultBaseConfig, customConfig)