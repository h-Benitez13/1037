module.exports = () => ({
  plugins: [
    require("postcss-import"), //Keep this first
    require("tailwindcss"),
    require("postcss-preset-env")({
      stage: 1,
    }),
  ],
})
