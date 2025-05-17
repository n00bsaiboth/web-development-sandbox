module.exports = {
    content: [
        './*.html',
        './**/*.html',
        './web/*.html',
        './src/**/*.{js,scss}', 
    ],
    theme: {
      extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
  }