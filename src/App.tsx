import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CounterPage from '@/pages/CounterPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CounterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
