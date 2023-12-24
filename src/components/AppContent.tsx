import React, { useEffect, useState } from "react";
import DebugModeButton from "./DebugModeButton";
import DebugBox from "./DebugBox";
import WorkflowSelector from "./WorkflowSelector";
import { Box, HStack, Heading, Spinner } from "@chakra-ui/react";
import { socket } from "../context/socket";
import CostAuditTracker from "./CostAuditTracker";


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

            <HStack className="underBox"
                width="100%">

                <CostAuditTracker />

                <DebugModeButton
                    debugMode={debugMode}
                    setDebugMode={setDebugMode} />

            </HStack>

            {debugMode &&
                <DebugBox />
            }
        </Box>
    );
};

export default AppContent;