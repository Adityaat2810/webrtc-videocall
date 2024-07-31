import React, { useEffect, useState } from 'react';
import { useSocket } from '../../providers/socket';

function Home() {
  const socket = useSocket();
  const [email, setMail ]= useState()
  const [roomId ,setRoomId] = useState()

  const handleJoinRoom =() => {

  }

  return (
    <div className='homepage-container'>
      <div className='input-container'>
        <input
          value={email}
          onChange={e=>setMail(e.target.value)}
          type='email'
          placeholder='enter your email here '
        />
        <input
          value={roomId}
          onChange={e=>setRoomId(e.target.value)}
          type='text'
          placeholder='enter room code '
        />
        <button>Enter Room</button>
      </div>
    </div>
  );
}

export default Home;