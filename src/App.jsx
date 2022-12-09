import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Notes  from './pages/Notes.jsx';
import Create from './pages/Create.jsx';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Notes />} exact/>
                <Route path="/create" element={<Create />} exact/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
