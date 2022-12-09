import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Notes  from './pages/Notes.jsx';
import Create from './pages/Create.jsx';
import routes from './routes.js';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.notes}   element={<Notes/>} exact/>
                <Route path={routes.create} element={<Create/>} exact/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
