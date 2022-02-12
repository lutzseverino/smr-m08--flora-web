module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'krona': ['Krona\\ One', 'sans'],
            'exo': ['Exo', 'sabs']
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}