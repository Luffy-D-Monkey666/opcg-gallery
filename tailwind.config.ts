import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Apple 风格深色主题
        background: '#000000',
        surface: '#1C1C1E',
        'surface-secondary': '#2C2C2E',
        // OPCG 品牌色
        primary: '#0066CC',
        'primary-light': '#007AFF',
        // 系统色
        success: '#34C759',
        warning: '#FF9500',
        danger: '#FF3B30',
        // 文字色
        'text-primary': '#FFFFFF',
        'text-secondary': '#8E8E93',
        'text-tertiary': '#636366',
      },
      borderRadius: {
        'apple': '16px',
        'apple-sm': '12px',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
export default config
