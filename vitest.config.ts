import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      reportsDirectory: './src/tests/unit/coverage'
    },
    reporters: [
      ['json', { 'file': 'coverage.json' }]
    ],
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
  },
})
