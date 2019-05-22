const theme = {
    typography: {
        useNextVariants: true,
    },

    palette: {
        primary: {
            main: '#4da6fe',
            contrastText: '#fff',
        },
    },

    overrides: {
        MuiButtonBase: {
            root: {
                color: "#fff"
            }
        },

        MuiOutlinedInput: {
            notchedOutline: {
                border: '1px solid #e5e5e5',
            },
        },
    }
};

export default theme;

//#4da6fe