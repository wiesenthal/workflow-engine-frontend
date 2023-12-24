import React, { CSSProperties, useContext, useEffect, useRef, useState } from "react";
import { SocketContext } from "../context/socket";
import { DebugOutput } from "../../../shared/types/debug";
import { Divider } from "@chakra-ui/react";
import { Box, Code, Heading } from "@chakra-ui/react";

const debugOutputStyle: CSSProperties = {
    textWrap: "nowrap",
}


const DebugBox = ({ }) => {
    const socket = useContext(SocketContext);
    const [debugOutputs, setDebugOutputs] = useState<DebugOutput[]>([]);
    const debugOutputListRef = useRef<HTMLDivElement>(null);

    const handleIncomingDebugOutput = (output: DebugOutput) => {
        setDebugOutputs((debugOutputs) => [...debugOutputs, output]);
    }

    const updateScrollHeight = () => {
        if (debugOutputListRef.current) {
            debugOutputListRef.current.scrollTop = debugOutputListRef.current.scrollHeight;
        }
    }

    useEffect(() => {
        socket.on('debugOutput', handleIncomingDebugOutput);

        return () => {
            socket.off('debugOutput');
        }
    }, [socket]);

    useEffect(() => {
        updateScrollHeight();
    }, [debugOutputs]);

    const renderDebugOutput = (debugOutputList: DebugOutput[]) => {
        return debugOutputList.map((output: DebugOutput) => {
            if (output.completedWorkflow !== undefined) {
                return (
                    <Box className="debug-output-line"
                        fontWeight="bold"
                        style={debugOutputStyle}>
                        Workflow "{output.completedWorkflow}" finished.
                    </Box>
                );
            } else if (output.error !== undefined) {
                return (
                    <Box className="debug-output-line"
                        color="red"
                        style={debugOutputStyle}>
                        {`Error: ${output.error.errorMessage}`}
                    </Box>
                );
            } else if (output.plainMessage !== undefined) {
                return (
                    <Box className="debug-output-line"
                        style={debugOutputStyle}>
                        {output.plainMessage}
                    </Box>
                );
            }
            return (
                <Box className="debug-output-line"
                    style={debugOutputStyle}>
                    {JSON.stringify(output)}
                </Box>
            );
        });
    }

    return (
        <Box className="DebugBox"
            flexDirection="column"
            marginBottom={20}
            minHeight={0}
            paddingTop={2}
            width="100%"
            alignItems="center">

            <Heading className="debug-box-title"
                fontSize="xl"
                fontWeight="semibold">
                Debug Logs
            </Heading>

            <Divider orientation="horizontal" margin={1}/>

            <Code className="debug-output-list"
                ref={debugOutputListRef}
                overflow="scroll"
                width="100%">

                {renderDebugOutput(debugOutputs)}

            </Code>

        </Box>
    );
}

export default DebugBox;