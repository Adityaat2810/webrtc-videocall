import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { SocketProvider } from '../providers/socket';
import RoomPage from './pages/room';

function App() {
  return (
    <SocketProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:roomId' element={<RoomPage/>} />

      </Routes>
    </SocketProvider>
  );
}

export default App;