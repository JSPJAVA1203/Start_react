import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//reportWebVitals();

ReactDOM.render(
    <React.StrictMode>
       <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
// 최초 진입 시 불려지는 파일이다.

// 5~10 line: ReactDOM.render(컴포넌트, 위치)
// 첫 번째 인자에는 일반적인 HTML의 태그처럼 생긴 Component들을 'root'라는 id를 갖고 있는 element에 띄워 달라는 의미이다.
// 6, 8 line: <React.StrictMode>
// 코드의 잠재적인 문제점을 파악하기 위한 도구이다. 렌더링은 되지 않아 보이는 UI가 없으며, 미리 잠재적인 문제점들을 경고해주도록 도와준다.
// 7 line: <App />
// App.js에서 만든 Component를 띄운다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

