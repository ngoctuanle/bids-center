import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import './index.scss';
import './styles/_antd.less';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
