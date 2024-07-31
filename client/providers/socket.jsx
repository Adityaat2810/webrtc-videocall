import {io} from "socket.io-client"
import React,{ useMemo } from "react";

const SocketContext = React.createContext(null);

export const useSocket = () => {
    const socket = React.useContext(SocketContext);
    if (!socket) {
      throw new Error("useSocket must be used within a SocketProvider");
    }
    return socket;
  };

export const SocketProvider= (props)=>{
    const socket = useMemo(()=> io('http://localhost:8001'))
    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}