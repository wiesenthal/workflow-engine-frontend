import React from "react";

interface ExecuteWorkflowButtonProps {
    workflowName: string;
    onClick: () => void;
}

const ExecuteWorkflowButton = ({ workflowName, onClick }: ExecuteWorkflowButtonProps) => {
    return (
        <button className="ExecuteWorkflowButton" onClick={onClick}>
            Execute workflow {workflowName}
        </button>
    );
};

export default ExecuteWorkflowButton;