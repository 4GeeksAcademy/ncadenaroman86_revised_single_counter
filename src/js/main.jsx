import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Pad with zeros and split into digits
  const padded = String(seconds).padStart(6, "0").split("");

  return (
    <div className="timer-container">
      <div className="digit">⏱</div>
      {padded.map((digit, index) => (
        <div className="digit" key={index}>
          {digit}
        </div>
      ))}
    </div>
  );
}
