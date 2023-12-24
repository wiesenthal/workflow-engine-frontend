import React, { useState } from "react";
import WorkflowSpace from "./WorkflowSpace";
import WorkflowEditor from "./WorkflowEditor";
import { Box, IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

type WorkflowSpaceOrEditorProps = {
    workflowName: string;
}

const WorkflowSpaceOrEditor = ({ workflowName }: WorkflowSpaceOrEditorProps) => {
    const [isEditor, setIsEditor] = useState<boolean>(false);
    
    return (
        <Box className="WorkflowSpaceOrEditorContainer"
            width="100%"
            height="100%">
            <IconButton className="EditorToggle"
                aria-label="Toggle editor"
                icon={<EditIcon />}
                onClick={() => setIsEditor(!isEditor)}
                position="absolute"
                size="sm"
                left={-10}
                zIndex={1} 
                color={isEditor ? "gray.100" : "activeColor"}
                bg={isEditor ? "activeColor" : "gray.100"}
                _hover={isEditor  ?
                    {
                        color: "gray.200",
                        bg: "darkActiveColor",
                    }
                    : {
                        color: "activeColor",
                        bg: "gray.200",
                    }
                }
                />
            {isEditor ?
                <WorkflowEditor workflowName={workflowName} />
                :
                <WorkflowSpace workflowName={workflowName} />
            }
        </Box>
    )
}

export default WorkflowSpaceOrEditor;
