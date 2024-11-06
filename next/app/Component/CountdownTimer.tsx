









import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, remainingTime]);

  const handleSetTime = () => {
    if (time > 0) {
      setRemainingTime(time);
    }
  };

  const handleStart = () => {
    if (remainingTime > 0) {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setRemainingTime(0);
    setTime(0);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-black to-gray">
      <h1 className="text-4xl font-extrabold uppercase mb-6 text-white overline first-line:underline">Countdown Timer</h1>

      <input
        type="number"
        className="border-2 border-gray-400 bg-transparent p-3 mb-6 text-sky-400 text-xl rounded"
        placeholder="Enter duration in Seconds"
        value={time > 0 ? time : ""}
        onChange={(e) => setTime(Number(e.target.value))}
      />

      <button
        onClick={handleSetTime}
        className="text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 mb-6"
      >
        Set Time
      </button>

      <div className="text-3xl font-semibold uppercase mb-6 text-white  hover: bg-red-300">
        {remainingTime} seconds remaining
      </div>

      <div>
        <button
          onClick={handleStart}
          className="text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 mr-2"
        >
           
          Start
        </button>

        <button
          onClick={handlePause}
          className="text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 mr-2"
        >
          Pause
        </button>

        <button
          onClick={handleReset}
          className="text-white px-8 py-4 rounded-lg font-normal bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
        >
          Reset
        </button>
      </div>
<footer>
<div className="flex justify-center space-x-4">
    <div>

    <p className="mt-20 text-gray-400 mt-20 text-center">© 2024 Countdown Timer by Anas Hakeem. All rights reserved.</p>

    </div>
    </div>
</footer>
    </div>
  );
};

export default CountdownTimer;