import React from 'react';

type WorkflowOutputProps = {
  output: string;
}

const WorkflowOutput = ({ output }: WorkflowOutputProps) => {
  return (
    <div className="WorkflowOutput">
        {output}
    </div>
  );
};

export default WorkflowOutput;