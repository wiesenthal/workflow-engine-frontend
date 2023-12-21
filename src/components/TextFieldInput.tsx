import React, { useState, useContext } from 'react';
import { SocketContext } from '../context/socket';

type TextFieldInputProps = {
    variableName: string;
}

const TextFieldInput = ({ variableName }: TextFieldInputProps ) => {
    const [value, setValue] = useState('');
    const socket = useContext(SocketContext);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        socket.emit('setInputVariable', variableName, event.target.value);
    }

    return (
        <input
            className="TextFieldInput"
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={`Enter value for ${variableName} here...`}
            />
    );
}

export default TextFieldInput;