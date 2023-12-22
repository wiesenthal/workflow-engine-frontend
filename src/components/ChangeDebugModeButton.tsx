import React from "react";

type ChangeDebugModeButtonProps = {
    debugMode: boolean;
    setDebugMode: (debugMode: boolean) => void;
}

const ChangeDebugModeButton = ({ debugMode, setDebugMode }: ChangeDebugModeButtonProps) => {
    return (
        <div className="ChangeDebugModeButton">
            Debug Mode
            <input type="checkbox"
                className="ChangeDebugModeCheckbox"
                checked={debugMode}
                onChange={(event) => setDebugMode(event.target.checked)}
            />
        </div>
    );
};

export default ChangeDebugModeButton;