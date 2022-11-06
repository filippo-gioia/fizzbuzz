import React from "react";
import TimeDisplay from "./TimeDisplay";
import { useCountdown } from "../hooks/useCountdown";

const ShowCounter = ({ seconds }) => {
  return (
    <div className="show-counter">
      <TimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [seconds] = useCountdown(targetDate);

  if (seconds <= 0) {
    return "Time's Up";
  } else {
    return <ShowCounter seconds={seconds} />;
  }
};

export default CountdownTimer;
