import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root')!;
const root = createRoot(container); // React 18 version
root.render(<h1>Hello React!</h1>);
