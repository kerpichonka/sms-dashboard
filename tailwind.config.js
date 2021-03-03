module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'image': "url('/assets/img/bgr-image.jpg')",
               }),
            spacing: {
                '217': '217px',
                '325': '325px',
                '57': '57px',
                '60': '60px',
                '2': '2px'
            },
            margin: {
                '43': '43px',
            },
            maxWidth: {
                '1142': '1142px',
            }
        },
        fontFamily: {
            'body': ['Proxima Nova', 'sans-serif']
        },
        fontSize: {
            'main': '16px',
            'header': ['1rem', '1rem']
        },
        screens: {
            'tablet': '880px',
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
