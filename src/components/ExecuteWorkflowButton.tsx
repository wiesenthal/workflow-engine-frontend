import { Button, Spacer } from "@chakra-ui/react";
import React from "react";


type ExecuteWorkflowButtonProps = {
    workflowName: string;
    onClick: () => void;
    disabled: boolean;
}

const ExecuteWorkflowButton = ({ workflowName, onClick, disabled }: ExecuteWorkflowButtonProps) => {
    return (
        <Button className="ExecuteWorkflowButton"
            bg="activeColor"
            _hover={{
                bg: "darkActiveColor"
            }}
            color='white'
            onClick={onClick}
            isLoading={disabled}
            marginX={2}>
            Run {workflowName}
        </Button>
    );
};

export default ExecuteWorkflowButton;