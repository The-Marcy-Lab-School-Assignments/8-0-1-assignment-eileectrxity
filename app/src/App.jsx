import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Luna's Friends</h1>
      <div className="dog-card" id="dog-card">
        {loading ? (
          <p>Loading...</p>
        ) : luna ? (
          <>
            <img id="dog-img" src={luna.photoUrl} alt="Luna's friend" />
            <p id="dog-text">Luna's friend</p>
            <button onClick={handleFetchNewFriend}>See new friend</button>
          </>
        ) : (
          <p>Couldn't load Luna's friends.</p>
        )}
      </div>
    </>
  );
};