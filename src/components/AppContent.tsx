import React, { useEffect, useState } from "react";
import ChangeDebugModeButton from "./ChangeDebugModeButton";
import DebugBox from "./DebugBox";
import WorkflowSelector from "./WorkflowSelector";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import { socket } from "../context/socket";


// const WORKFLOWS = [
//     'Step 0',
//     'Step 1',
//     'Step 2',
//     'Step 3',
//     'Step 4',
//     'Step 6',
//     'Custom'
// ];

const AppContent = ({ }) => {
    const [debugMode, setDebugMode] = useState<boolean>(false);
    const [workflowNames, setWorkflowNames] = useState<string[]>();

    const getWorkflowNamesFromServer = async () => {
        socket.emit('getWorkflowNames', (workflowNames: string[]) => {
            setWorkflowNames(workflowNames);
        });
    }
    
    useEffect(() => {
        getWorkflowNamesFromServer();
    }, []);

    return (
        <Box className="AppContent"
            flexDirection="column"
            width="720px"
            maxWidth="100%"
            height="100%"
            marginX="auto"
            alignItems="center">

            <Heading className="main-heading"
                marginTop={48}
                marginBottom={10}
                fontSize="32px"
                fontWeight="semibold"
            >
                Miles' workflow engine
            </Heading>

            {workflowNames !== undefined ?
                <WorkflowSelector
                    workflowNames={workflowNames} />
                :
                <Spinner />
            }


            <ChangeDebugModeButton
                debugMode={debugMode}
                setDebugMode={setDebugMode} />

            {debugMode &&
                <DebugBox />
            }
        </Box>
    );
};

export default AppContent;