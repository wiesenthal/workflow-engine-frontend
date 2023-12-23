import { Box } from '@chakra-ui/react'
import React from 'react';

type WorkflowOutputProps = {
  output: string;
}

const WorkflowOutput = ({ output }: WorkflowOutputProps) => {
  return (
    <Box className="WorkflowOutput"
      lineHeight={10}
      marginX={2}
      paddingX={2}
      flexGrow={1}
      color="primaryFont"
      overflowX="scroll"
      style={{textWrap: 'nowrap'}}>
        {output}
    </Box>
  );
};

export default WorkflowOutput;