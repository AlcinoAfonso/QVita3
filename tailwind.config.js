/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}"],
  theme: {
    extend: {
      maxWidth: { layout: "var(--content-max)" },
      spacing: { section: "var(--section-padding)" },
      colors: {
        brand: "var(--brand)",
        "brand-dark": "var(--brand-dark)",
        muted: "var(--text-muted)",
        "bg-light": "var(--bg-light)",
      },
      fontFamily: {
        head: "var(--font-head)",
        body: "var(--font-body)",
      },
      fontSize: {
        h1: "var(--fs-h1)",
        h2: "var(--fs-h2)",
        body: "var(--fs-body)",
        note: "var(--fs-note)",
      },
      borderRadius: { card: "var(--radius)" },
      boxShadow: { card: "var(--shadow)" },
    },
  },
  plugins: [],
};
