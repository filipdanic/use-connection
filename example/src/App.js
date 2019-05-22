import React from 'react';
import useConnection from 'use-connection';
import logo from './logo.png';

const App = () => {
  const data = useConnection();
  return (
    <div className='card'>
      <img src={logo} style={{ height: 96, marginBottom: 12 }} alt='' />
      <img src='https://img.shields.io/npm/v/use-connection.svg' alt='' />
      <h1>use-connection</h1>
      <p>A custom React hook that lets you know <mark>if the client is online</mark> as well as <mark>network information such as downlink and type</mark> if it is supported by the browser.</p>
      <p>Start with:</p>
      <p><code>npm install --save use-connection</code></p>
      <p>And in your component just use the hook as:</p>
      <p><code>const data = useConnection();</code></p>
      <p>Raw output for your session: </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p>Open up your Browser Tool’s Network tab and play around with Throttling to see these values change!</p>
      <h2>Docs</h2>
      <p>What you see above depends highly on your browser. Most browsers will support the basic <mark>online/offline</mark> event listener. Additional network information is taken from <mark>navigator.connection</mark> which is still not supported on all browsers.</p>
      <h3>Response Properties</h3>
      <p>The response will always contain three properties:</p>
      <ul>
        <li><code>online</code> – boolean, RT info on online status.</li>
        <li><code>since</code> – timestamp of when the online status was last toggled.</li>
        <li><code>networkInformationSupported</code> – boolean, true if <mark>NetworkInformation</mark> is available.</li>
      </ul>
      <h3>NetworkInformation Properties</h3>
      <p>If <mark>networkInformationSupported</mark> is <code>true</code>, then you can expect to see:</p>
      <ul>
        <li>downlink</li>
        <li>downlinkMax</li>
        <li>effectiveType</li>
        <li>type</li>
        <li>rtt</li>
        <li>saveData</li>
      </ul>
      <p>Consult the MDN documentation <a href='https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation#Properties' target='_blank' rel='noopener noreferrer'>for NetworkInformation</a> to see what each means.</p>
    </div>
  );
};

export default App;
