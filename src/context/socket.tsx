import { createContext } from 'react';
import io from "socket.io-client";

const socketUrl = `${window.location.protocol}//${window.location.host}`;

export const socket = io(socketUrl);

export const SocketContext = createContext(socket);