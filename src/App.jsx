import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import NotFound from './Pages/NotFound';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/movie-explorer" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
