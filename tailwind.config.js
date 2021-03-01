module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'image': "url('/assets/img/bgr-image.jpg')",
               }),
            spacing: {
                '444': '444px',
            },
            margin: {
                '43': '43px',
            },
            maxWidth: {
                '1110': '1110px',
            }
        },
        fontFamily: {
            'body': ['Proxima Nova', 'sans-serif']
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
