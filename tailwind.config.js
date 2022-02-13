module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'krona': ['Krona\\ One', 'sans'],
            'exo': ['Exo', 'sabs']
        },
        extend: {
            colors: {
                blue: '#5865F2',
                green: '#57F287',
                yellow: '#FEE75C',
                pink: '#EB459E',
                red: '#ED4245',
            },
            boxShadow: {
                'inner-component': 'inset 0 1px 0 0 rgb(0 0 0/.05)',
                'inner-dark-component': 'inset 0 1px 0 0 rgb(255 255 255/.05)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}