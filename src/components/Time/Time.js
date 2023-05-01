import './Time.css';
import { useEffect, useState } from "react";

export function Time() {
  const geolocationApiKey = 'e2e2896edd0c4dc59a8301b1299f6e56';
  const [time, setTime] = useState([]);
  const [date, setDate] = useState([]);
  const [showInfo, setShowInfo] = useState(false);

  const getTime = () => {
    let timeUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${geolocationApiKey}`;
    fetch(timeUrl)
      .then(res => res.json())
      .then(data => {
        setTime(data.time_zone.current_time.substring(11, 19));
        setDate(data.time_zone.current_time.substring(0, 10));
      });
  };

  useEffect(() => {
    getTime();
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, [geolocationApiKey]);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div className="Time" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="time-info">
        <p>{time}</p>
        {showInfo && (
          <p>{date}</p>
        )}
      </div>
    </div>
  );
}