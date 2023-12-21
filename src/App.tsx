import React from 'react';
import './styles/App.css';
import { socket, SocketContext } from './context/socket';
import WorkflowSpace from './components/WorkflowSpace';

function App() {
  return (
    <div className="App">
      <SocketContext.Provider value={socket}>
        <WorkflowSpace workflowName="step_0" />
      </SocketContext.Provider>
    </div>
  );
}

export default App;
