import React, { useEffect, useState } from 'react';
import { Routes } from './routes';
import { WelcomeView } from './views';

function App() {
  const [skipWallet, setSkipWallet] = useState(true);
  useEffect(() => {
  }, [skipWallet]);

  return skipWallet ? <WelcomeView clickCallback={setSkipWallet} /> : <Routes />;
}

export default App;
