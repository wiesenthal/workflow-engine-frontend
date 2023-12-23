import { Box } from '@chakra-ui/react'
import React from 'react';
import { SharedError } from '../../../shared/types/error';
import { isError } from '../utils/errorUtils';

type WorkflowOutputProps = {
  output: string | SharedError;
}

const WorkflowOutput = ({ output }: WorkflowOutputProps) => {
  const outputMessage = isError(output) ?
    `Error: ${output.errorMessage}`
    :
    output;

  return (
    <Box className="WorkflowOutput"
      lineHeight={10}
      marginX={2}
      paddingX={2}
      flexGrow={1}
      color={isError(output) ? 'red' : 'primaryFont'}
      overflowX="scroll"
      style={{ textWrap: 'nowrap' }}>
      {outputMessage}
    </Box>
  );
};

export default WorkflowOutput;