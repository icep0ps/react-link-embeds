import './App.css';
import './index.css';
import Embed from './embed/Embed';
import { useState } from 'react';

function App() {
  const [isDisabled, setIsDisabled] = useState(false);

  return <Embed isDisable={isDisabled} setIsDisabled={setIsDisabled} />;
}

export default App;
