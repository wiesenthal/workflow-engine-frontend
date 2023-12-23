import { Box, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { Switch } from '@chakra-ui/react'


type ChangeDebugModeButtonProps = {
    debugMode: boolean;
    setDebugMode: (debugMode: boolean) => void;
}

const ChangeDebugModeButton = ({ debugMode, setDebugMode }: ChangeDebugModeButtonProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDebugMode(event.target.checked);
    }

    return (
        <HStack className="ChangeDebugModeButton"
            alignItems="center"
            alignSelf="end"
            marginTop={2}
            spacing={2}>

            <Box>Show Debug</Box>

            <Switch className="ChangeDebugModeCheckbox"
                isChecked={debugMode}
                onChange={handleChange}
                colorScheme="switchScheme"/>

        </HStack>
    );
};

export default ChangeDebugModeButton;