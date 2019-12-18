import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import App from './App';

// 같은 내용을 쉽게 재사용 할 수 있도록 렌더링 할 내용을 하나의 컴포넌트로 묶음
const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

const root = document.getElementById('root');

// 프로덕션 환경 에서는 loadableReady 와 hydrate 를 사용하고
// 개발 환경에서는 기존 하던 방식으로 처리
if (process.env.NODE_ENV === 'production') {
  loadableReady(() => {
    ReactDOM.hydrate(<Root />, root);
  });
} else {
  ReactDOM.render(<Root />, root);
}

serviceWorker.unregister();
