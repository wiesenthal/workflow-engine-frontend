import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/socket";
import { Box } from "@chakra-ui/react";


const CostAuditTracker = ({ }) => {
    const socket = useContext(SocketContext);
    const [totalCost, setTotalCost] = useState<number>();

    const handleUpdateTotalCost = () => {
        socket.on('updateTotalCost', (totalCost: number) => {
            setTotalCost(totalCost);
        });
    }

    useEffect(() => {
        handleUpdateTotalCost();
    }, []);

    if (totalCost === undefined) {
        // Have not seen a total cost yet, so no AI API calls have been made.
        return null;
    }

    return (
        <Box className="CostAuditTracker"
            marginRight="auto"
            marginTop={2}>
            OpenAI API Cost: ${totalCost}
        </Box>
    );
}

export default CostAuditTracker;