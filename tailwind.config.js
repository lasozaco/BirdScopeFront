/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: 'var(--color-secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)',
        },
        earth: {
          DEFAULT: 'var(--color-earth)',
          foreground: 'var(--color-earth-foreground)',
        },
      },
      fontFamily: {
        body: ['var(--font-body)', 'sans-serif'],
        headings: ['var(--font-headings)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
