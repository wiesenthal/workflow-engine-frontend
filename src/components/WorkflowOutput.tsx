import React from 'react';

interface WorkflowOutputProps {
  output: string[];
}

const WorkflowOutput = ({ output }: WorkflowOutputProps) => {
  return (
    <div className="WorkflowOutput">
        {output}
    </div>
  );
};

export default WorkflowOutput;