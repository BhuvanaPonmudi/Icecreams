import { Fragment, useEffect, useState } from "react";
import React from "react";
import  "../styles/Clock.css";

function Clock() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  let interval;

  const startTimer = () => {
    const countDownDate = new Date("June 25,2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });

  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <h4>Offer ends in</h4>

          <div className="clock">
            <section className="sections">
              <h6>{timerDays}</h6>
              <small>Days</small>
            </section>
            <span>: </span>{" "}
            <section className="sections">
              <h6>{timerHours}</h6>
              <small>Hours</small>
            </section>
            <span>: </span>{" "}
            <section className="sections">
              <h6>{timerMinutes}</h6>
              <small>Minutes</small>
            </section>
            <span>: </span>{" "}
            <section className="sections">
              <h6>{timerSeconds}</h6>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
}
export default Clock;
