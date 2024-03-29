const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                serif: ['Rubik', ...defaultTheme.fontFamily.serif],
                comic: ['Comic Sans MS', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
    require('@tailwindcss/forms'),
    ],
};
