import React from "react";

interface ExecuteWorkflowButtonProps {
    workflowName: string;
    onClick: () => void;
    disabled: boolean;
}

const ExecuteWorkflowButton = ({ workflowName, onClick, disabled }: ExecuteWorkflowButtonProps) => {
    return (
        <button 
            className="ExecuteWorkflowButton"
            onClick={onClick}
            disabled={disabled}
            >
            Execute workflow {workflowName}
        </button>
    );
};

export default ExecuteWorkflowButton;