import React, { useState, useContext } from 'react';
import { Input } from '@chakra-ui/react';
import { SocketContext } from '../context/socket';


type TextFieldInputProps = {
    variableName: string;
}

const TextFieldInput = ({ variableName }: TextFieldInputProps) => {
    const [value, setValue] = useState('');
    const socket = useContext(SocketContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        socket.emit('setInputVariable', variableName, event.target.value);
    }

    return (
        <Input className="TextFieldInput"
            value={value}
            onChange={handleChange}
            placeholder={`${variableName}...`}
            variant='outline'
            type="text"
            marginX={2}
            marginTop={2}
            borderRadius="commonRadius"
            color="primaryFont"/>
    );
}

export default TextFieldInput;