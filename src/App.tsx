import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import TokenPage from './pages/TokenPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/token" element={<TokenPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;