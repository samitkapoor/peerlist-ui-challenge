import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bento from './challenges/Bento';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
