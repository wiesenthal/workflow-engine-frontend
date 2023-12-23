import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import WorkflowSpace from "./WorkflowSpace";

type WorkflowSelectorProps = {
    workflowNames: string[];
}

const TabPanelsShadow: React.CSSProperties = {
    boxShadow: "rgba(35, 35, 65, 0.03) 0px 6px 6px 0px, rgba(36, 36, 70, 0.06) 0px 12px 12px 0px"
}

const WorkflowSelector = ({ workflowNames }: WorkflowSelectorProps) => {
    return (
        <Tabs className="WorkflowTabs"
            align="start"
            variant="enclosed"
            width="100%"
            colorScheme="tabsScheme">

            <TabList overflow="scroll">

                {workflowNames.map((workflowName, index) => (

                    <Tab 
                        key={index}
                        borderTopRadius="commonRadius"
                        marginRight={2}
                        borderBottom="none"
                        borderColor="slateGray"
                        _selected={{
                            bg: "white",
                            color: "activeColor",
                        }}
                        _hover={{
                            bg: "slateGray",
                            color: "primaryFont"
                        }}>
                        {workflowName}
                    </Tab>

                ))} 

        </TabList>

            <TabPanels
                bg="white"
                borderRadius="commonRadius"
                borderTopLeftRadius={0}
                style={TabPanelsShadow}>

            {workflowNames.map((workflowName, index) => (
                <TabPanel key={index} 
                    width="100%">

                    <WorkflowSpace
                        workflowName={workflowName}
                        key={index} />

                </TabPanel>
            ))}
            </TabPanels>
        </Tabs>
    );
};

export default WorkflowSelector;