import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FluidMenuPage from './challenges/FluidMenuPage';
import DynamicStatusIndicator from './challenges/DynamicStatusIndicator';
import TodoList from './challenges/TodoList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FluidMenuPage />} />
        <Route path="/dynamic-status" element={<DynamicStatusIndicator />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
