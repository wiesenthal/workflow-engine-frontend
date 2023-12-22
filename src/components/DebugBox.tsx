import React, { useContext, useEffect, useRef, useState } from "react";
import { SocketContext } from "../context/socket";
import { DebugOutput } from "../../../shared/types/debug";

import '../styles/DebugBox.css';

const DebugBox = ({ }) => {
    const socket = useContext(SocketContext);
    const [debugOutputs, setDebugOutputs] = useState<DebugOutput[]>([]);
    const debugOutputListRef = useRef<HTMLDivElement>(null);

    const handleIncomingDebugOutput = (output: DebugOutput) => {
        setDebugOutputs((debugOutputs) => [...debugOutputs, output]);
    }

    const updateScrollHeight = () => {
        if (debugOutputListRef.current) {
            debugOutputListRef.current.scrollTop = debugOutputListRef.current.scrollHeight;
        }
    }

    useEffect(() => {
        socket.on('debugOutput', handleIncomingDebugOutput);

        return () => {
            socket.off('debugOutput');
        }
    }, [socket]);

    useEffect(() => {
        updateScrollHeight();
    }, [debugOutputs]);

    const renderDebugOutput = (debugOutputList: DebugOutput[]) => {
        return debugOutputList.map((output: DebugOutput) => {
            if (output.completedWorkflow !== undefined) {
                return (
                    <div className="debug-output-line completed-workflow">
                        Workflow "{output.completedWorkflow}" finished.
                    </div>
                );
            }
            return (
                <div className="debug-output-line">
                    {JSON.stringify(output)}
                </div>
            );
        });
    }

    return (
        <div className="DebugBox">
            <h2 className="debug-box-title">Debug Output</h2>
            <div 
                className="debug-output-list"
                ref={debugOutputListRef}
            >
                {renderDebugOutput(debugOutputs)}
            </div>
        </div>
    );
}

export default DebugBox;