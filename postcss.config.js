module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-nested": {},
    "autoprefixer": {},
    "cssnano": process.env.NODE_ENV === "production" ? {} : false
  }
}
