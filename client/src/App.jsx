import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { SocketProvider } from '../providers/socket';

function App() {
  return (
    <SocketProvider>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </SocketProvider>
  );
}

export default App;