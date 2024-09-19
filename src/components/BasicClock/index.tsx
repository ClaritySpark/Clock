import React, { useState, useEffect } from "react";
import { City, TIME_ZONES } from "../../types";

interface BasicClockProps {
  city?: City;
}

const BasicClock: React.FC<BasicClockProps> = ({ city = "Seoul" }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeZone = TIME_ZONES.find((tz) => tz.city === city)?.timeZone || "UTC";
  const formattedTime = time.toLocaleTimeString("en-US", { timeZone });

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{city}</h2>
      <p className="text-2xl">{formattedTime}</p>
    </div>
  );
};

export default BasicClock;
