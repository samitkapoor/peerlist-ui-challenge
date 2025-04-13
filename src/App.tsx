import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FluidMenuPage from './challenges/FluidMenuPage';
import DynamicStatusIndicator from './challenges/DynamicStatusIndicator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FluidMenuPage />} />
        <Route path="/dynamic-status" element={<DynamicStatusIndicator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
