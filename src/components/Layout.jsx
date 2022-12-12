import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

import useClasses from '../hooks/useClasses.js';

const drawerWidth = 240;
const styles = (theme) => ({
    page: {
        background: '#f9f9f9 !important',
        width: '100% !important'
    },
    drawer: {
        width: `${drawerWidth}px !important`
    },
    drawerPaper: {
        width: `${drawerWidth}px !important`
    },
    root: {
        display: 'flex !important'
    }
});

const Layout = ({ children }) => {
    const classes = useClasses(styles);

    return (
        <div className={classes.root}>
            {/*app bar  */}

            {/*app drawer*/}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5">
                        Ninja Notes
                    </Typography>
                </div>
            </Drawer>

            <div className={classes.page}>
                { children }
            </div>

        </div>
    );
};

export default Layout;
