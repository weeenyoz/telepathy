import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: { main: blue[500], light: blue[50] },
        secondary: { main: red[500] },
    },
    typography: {
        subtitle1: {
            fontSize: 18,
        },
        subtitle2: {
            fontSize: 15,
            color: '#696969',
        },
    },
});

export default theme;
