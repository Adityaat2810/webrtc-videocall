import React, { useEffect, useState } from 'react';
import { useSocket } from '../../providers/socket';
import {useNavigate} from 'react-router-dom'

function Home() {

  const socket = useSocket();
  const navigate= useNavigate();

  const [email, setMail ]= useState()
  const [roomId ,setRoomId] = useState()

  useEffect(()=>{
    socket.on('joined-room',({roomId})=>{
      console.log(roomId)
      navigate(`/room/${roomId}`)
    })
  },[])

  const handleJoinRoom =() => {
    socket.emit('join-room',{emailId:email ,roomId})
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
        <button onClick={handleJoinRoom}>Enter Room</button>
      </div>
    </div>
  );
}

export default Home;