import React, { useState } from 'react';
import './styles/App.css';
import { socket, SocketContext } from './context/socket';
import WorkflowSpace from './components/WorkflowSpace';
import WorkflowSelector from './components/WorkflowSelector';

const WORKFLOWS = [
  'step_0',
  'step_1',
  'step_2',
  'step_3',
  'step_4',
];

function App() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string>(WORKFLOWS[0]);

  return (
    <div className="App">
      <SocketContext.Provider value={socket}>
        <WorkflowSelector workflows={WORKFLOWS} selectedWorkflow={selectedWorkflow} setSelectedWorkflow={setSelectedWorkflow} />
        {WORKFLOWS.map((workflow, index) => ( // This allows workflows to continue executing while they are not selected
          <WorkflowSpace key={index} workflowName={workflow} isActive={workflow === selectedWorkflow} />
        ))}
      </SocketContext.Provider>
    </div>
  );
}

export default App;
