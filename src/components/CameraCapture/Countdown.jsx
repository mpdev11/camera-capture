import { useState, useEffect } from 'react';

function Countdown({ seconds, onCountdownEnd, hide = false, className = '' }) {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    if (count === null) return;

    if (count === 0) {
      onCountdownEnd();
      return;
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onCountdownEnd]);

  if (count === 0 || count === null) return null;

  if (hide) return null;

  return <div className={className}>{count}</div>;
}

export default Countdown;
