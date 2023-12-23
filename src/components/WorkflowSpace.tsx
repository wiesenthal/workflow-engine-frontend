import React, { useContext, useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react"


import ExecuteWorkflowButton from './ExecuteWorkflowButton';
import WorkflowOutput from './WorkflowOutput';
import { SocketContext } from '../context/socket';

import TextFieldInput from './TextFieldInput';
import { isError } from '../utils/errorUtils';
import { SharedError } from '../../../shared/types/error';

type WorkflowSpaceProps = {
  workflowName: string;
}

const WorkflowSpace = ({ workflowName }: WorkflowSpaceProps) => {
  const socket = useContext(SocketContext);
  const [output, setOutput] = useState<string>('');
  const [isTaskExecuting, setIsTaskExecuting] = useState<boolean>(false);
  const [inputVariables, setInputVariables] = useState<string[]>();

  const handleExecutionResult = (response: string | SharedError) => {
    setIsTaskExecuting(false);
    if (isError(response)) {
      setOutput(response.errorMessage);
      return;
    }

    setOutput(response);
  }

  const executeWorkflow = () => {
    setIsTaskExecuting(true);
    socket.emit('executeWorkflow', workflowName, handleExecutionResult);
  }

  const checkInputVariables = () => {
    socket.emit('checkWorkflowInputs', workflowName, (response: string[] | SharedError) => {
      if (isError(response)) {
        return;
      }

      setInputVariables(response);
    });
  }

  useEffect(() => {
    checkInputVariables();
    setOutput('');
    setIsTaskExecuting(false);
  }, [workflowName]);

  return (
    <Box className="WorkflowSpace"
      flexDirection="column"
      alignItems="left"
      width="100%"
      padding={2}
      >

      <Box className="workflow-space-button-and-output"
        flexDirection="row">

        <ExecuteWorkflowButton
          workflowName={workflowName}
          onClick={executeWorkflow}
          disabled={isTaskExecuting} />

        {output !== "" &&
          <WorkflowOutput output={output} />
        }

      </Box>

      <Box className="workflow-input-container"
        flexDirection="row"
        margin={0}>
        {inputVariables?.map(
          (variableName: string, index: number) => (
            <TextFieldInput
              variableName={variableName}
              key={index} />
          ))}
      </Box>


    </Box>
  );
};

export default WorkflowSpace;