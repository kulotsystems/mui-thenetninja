import useClasses from '../hooks/useClasses.js';

const styles = (theme) => ({
    page: {
        background: '#f9f9f9 !important',
        width: '100% !important'
    }
});

const Layout = ({ children }) => {
    const classes = useClasses(styles);

    return (
        <div>
            {/*app bar  */}

            {/*app drawer*/}

            <div className={classes.page}>
                { children }
            </div>

        </div>
    );
};

export default Layout;
