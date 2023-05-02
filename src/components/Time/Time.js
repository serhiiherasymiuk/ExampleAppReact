import { useEffect, useState } from "react";
import './Time.css';

export function Time() {
  const geolocationApiKey = '1653ea892b214acf9506619e9ecfd288';
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const fetchDate = () => {
    let timeUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${geolocationApiKey}`;
    fetch(timeUrl)
      .then(res => res.json())
      .then(data => {
        setDate(data.time_zone.current_time.substring(0, 10));
      });
  };

  useEffect(() => {
    fetchDate();
    const interval = setInterval(fetchDate, 3600000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toString().substring(15, 24)), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div className="Time" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`time-info ${showInfo ? 'time-info-expanded' : ''}`}>
        <p>{time}</p>
        {showInfo && (
          <p>{date}</p>
        )}
      </div>
    </div>
  );
}