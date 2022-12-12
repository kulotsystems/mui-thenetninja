import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Notes  from './pages/Notes.jsx';
import Create from './pages/Create.jsx';
import routes from './routes.js';
import { createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';
import Layout from './components/Layout.jsx';

// Custom Theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2'
        },

        // different approach
        secondary: purple
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight  : 400,
        fontWeightRegular: 500,
        fontWeightMedium : 600,
        fontWeightBold   : 700
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path={routes.notes}   element={<Notes/>} exact/>
                        <Route path={routes.create} element={<Create/>} exact/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;
