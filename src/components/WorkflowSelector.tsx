import React from "react";

interface WorkflowSelectorProps {
    workflows: string[];
    selectedWorkflow: string;
    setSelectedWorkflow: (workflow: string) => void;
}

const WorkflowSelector = ({ workflows, selectedWorkflow, setSelectedWorkflow }: WorkflowSelectorProps) => {
    return (
        <select
            className="WorkflowSelector"
            value={selectedWorkflow}
            onChange={(event) => setSelectedWorkflow(event.target.value)}
        >
            {workflows.map((workflow) => (
                <option key={workflow} value={workflow}>
                    {workflow}
                </option>
            ))}
        </select>
    );
};

export default WorkflowSelector;