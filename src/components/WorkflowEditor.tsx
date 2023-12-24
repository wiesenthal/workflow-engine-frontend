import React, { useContext, useEffect, useState } from "react";
import { Textarea } from '@chakra-ui/react'
import { SocketContext } from "../context/socket";

type WorkflowEditorProps = {
    workflowName: string;
}

const WorkflowEditor = ({ workflowName }: WorkflowEditorProps) => {
    const [workflowCode, setWorkflowCode] = useState<string>('');

    const socket = useContext(SocketContext);

    const updateWorkflowCode = (newCode: string) => {
        setWorkflowCode(newCode);
        socket.emit('updateWorkflowCode', workflowName, newCode);
    }

    useEffect(() => {
        socket.emit('getWorkflowCode', workflowName, (response: string) => {
            setWorkflowCode(response);
        });
    }, [workflowName]);

    return (
        <Textarea
            value={workflowCode}
            onChange={(event) => updateWorkflowCode(event.target.value)}
            placeholder="Workflow code..."
            fontFamily="monospace"
            color="primaryFont"
            width="100%"
            height={56}/>
    );
};

export default WorkflowEditor;