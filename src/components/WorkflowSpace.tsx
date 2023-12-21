import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/socket';

import ExecuteWorkflowButton from './ExecuteWorkflowButton';
import WorkflowOutput from './WorkflowOutput';

import '../styles/WorkflowSpace.css';
import TextFieldInput from './TextFieldInput';
import { isError } from '../utils/errorUtils';
import { SharedError } from '../../../shared/types/error';

type WorkflowSpaceProps = {
  workflowName: string;
  isActive?: boolean;
}

const WorkflowSpace = ({ workflowName, isActive }: WorkflowSpaceProps) => {
  const socket = useContext(SocketContext);
  const [output, setOutput] = useState<string>('');
  const [isTaskExecuting, setIsTaskExecuting] = useState<boolean>(false);
  const [inputVariables, setInputVariables] = useState<string[]>();

  let handleExecutionResult = (response: string | SharedError) => {
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

  const checkInputVariables = () => {
    socket.emit('checkWorkflowInputs', workflowName, (response: string[] | SharedError) => {
      if (isError(response)) {
        console.log(`Failed to check input variables for workflow ${workflowName}, error: ${JSON.stringify(response)}`);
        return;
      }

      console.log(`Input variables for workflow ${workflowName} are: ${response}`);
      setInputVariables(response);
    });
  }

  useEffect(() => {
    checkInputVariables();
    setOutput('');
    setIsTaskExecuting(false);
  }, [workflowName]);

  if (!isActive) {
    return null;
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