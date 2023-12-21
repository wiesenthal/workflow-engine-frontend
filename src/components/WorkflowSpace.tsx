import React, { useContext, useState } from 'react';
import { SocketContext } from '../context/socket';

import ExecuteWorkflowButton from './ExecuteWorkflowButton';
import WorkflowOutput from './WorkflowOutput';

import '../styles/WorkflowSpace.css';
import TextFieldInput from './TextFieldInput';
import { BackendError, isError } from '../utils/errorUtils';

interface WorkflowSpaceProps {
  workflowName: string;
  inputVariables?: string[];
}

const WorkflowSpace = ({ workflowName, inputVariables }: WorkflowSpaceProps) => {
  const socket = useContext(SocketContext);
  const [output, setOutput] = useState<string>('');
  const [isTaskExecuting, setIsTaskExecuting] = useState<boolean>(false);

  const handleExecutionResult = (response: string | BackendError) => {
    setIsTaskExecuting(false);
    // detect if response is an error, keeping in mind that the error type is not preserved when sending over socket.io
    if (isError(response)) {
      console.log(`Workflow ${workflowName} failed to execute, error: ${JSON.stringify(response)}`);
      setOutput(response.errorMessage);
      return;
    }

    console.log(`Workflow ${workflowName} executed, response: ${response}`);
    setOutput(response);
  }


  const executeWorkflow = () => {
    console.log(`Executing workflow ${workflowName}`);
    setIsTaskExecuting(true);
    socket.emit('executeWorkflow', workflowName, handleExecutionResult);
  }

  return (
    <div className="WorkflowSpace">
      {inputVariables?.map((variableName: string, index: number) => (
        <TextFieldInput key={index} variableName={variableName} />
      ))}
      <ExecuteWorkflowButton workflowName={workflowName} onClick={executeWorkflow} disabled={isTaskExecuting} />
      <WorkflowOutput output={output} />
    </div>
  );
};

export default WorkflowSpace;