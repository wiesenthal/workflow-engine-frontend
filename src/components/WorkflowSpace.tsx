import React, { useContext, useState } from 'react';
import { SocketContext } from '../context/socket';

import ExecuteWorkflowButton from './ExecuteWorkflowButton';
import WorkflowOutput from './WorkflowOutput';

import '../styles/WorkflowSpace.css';

interface WorkflowSpaceProps {
  workflowName: string;
}

const WorkflowSpace = ({ workflowName }: WorkflowSpaceProps) => {
  const socket = useContext(SocketContext);
  const [output, setOutput] = useState<string[]>([]);

  const executeWorkflow = () => {
    console.log(`Executing workflow ${workflowName}`);
    socket.emit('executeWorkflow', workflowName, (response: any) => {
      console.log(`Workflow ${workflowName} executed, response: ${response}`);
      setOutput(response);
    });
  }

  return (
    <div className="WorkflowSpace">
      <ExecuteWorkflowButton workflowName={workflowName} onClick={executeWorkflow} />
      <WorkflowOutput output={output} />
    </div>
  );
};

export default WorkflowSpace;