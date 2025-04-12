import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FluidMenuPage from './challenges/FluidMenuPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FluidMenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
