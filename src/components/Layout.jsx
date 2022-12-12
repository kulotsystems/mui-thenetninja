import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import useClasses from '../hooks/useClasses.js';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useNavigate, useLocation } from 'react-router-dom';
import routes from '../routes.js';

const drawerWidth = 240;
const styles = (theme) => {
    return {
        page: {
            background: '#f9f9f9 !important',
            width: '100% !important',
            padding: `${theme.spacing(3)}`
        },
        drawer: {
            width: `${drawerWidth}px !important`
        },
        drawerPaper: {
            width: `${drawerWidth}px !important`
        },
        root: {
            display: 'flex !important'
        },
        active: {
            background: '#f4f4f4 !important',
            color: `${theme.palette.secondary.main} !important`
        },
        title: {
            padding: `${theme.spacing(2)} !important`
        }
    }
}

const Layout = ({ children }) => {
    const classes  = useClasses(styles);
    const navigate = useNavigate();
    const currentLocation = useLocation().pathname;

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlinedIcon color="secondary"/>,
            path: routes.notes
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlinedIcon color="secondary"/>,
            path: routes.create
        }
    ]

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
                    <Typography variant="h5" className={classes.title}>
                        Ninja Notes
                    </Typography>
                </div>

                {/*list / links*/}
                <List>
                    {menuItems.map(item => (
                        <ListItemButton
                            key={item.text}
                            onClick={() => navigate(item.path)}
                            className={currentLocation === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>

            <div className={classes.page}>
                { children }
            </div>

        </div>
    );
};

export default Layout;
