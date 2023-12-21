import React, { useState } from 'react';
import './styles/App.css';
import './styles/SelectionComponents.css';
import { socket, SocketContext } from './context/socket';
import WorkflowSpace from './components/WorkflowSpace';
import WorkflowSelector from './components/WorkflowSelector';

const WORKFLOWS = [
  'step_0',
  'step_1',
  'step_2',
  'step_3',
  'step_4',
  'step_6',
  'multi_input'
];

function App() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string>(WORKFLOWS[0]);

  return (
    <div className="App">
      <SocketContext.Provider value={socket}>

        <div className="selection-container">
          <WorkflowSelector workflows={WORKFLOWS} selectedWorkflow={selectedWorkflow} setSelectedWorkflow={setSelectedWorkflow} />
        </div>

        {
        WORKFLOWS.map((workflow, index) => ( // This allows workflows to continue executing while they are not selected
          <WorkflowSpace key={index} workflowName={workflow} isActive={workflow === selectedWorkflow} />
        ))
        }
      </SocketContext.Provider>
    </div>
  );
}

export default App;
