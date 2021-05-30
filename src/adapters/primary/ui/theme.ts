import {createMuiTheme} from "@material-ui/core";

const theme = () => createMuiTheme({
    spacing: 4,
    palette: {
        primary: {
            main: '#001E62',
        },
        secondary: {
            main: '#F3B617',
        },
    },
});

export default theme;