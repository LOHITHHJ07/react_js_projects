import React from "react";
import { useState } from "react";
import "./Calender.css";
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
export default function Calender() {
  const [currentDate, setDate] = useState(date);
  const dateMonth =
    monthNames[currentDate.getMonth()] + "   " + currentDate.getFullYear();
  const currentMonthDays = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const startingDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth()
  ).getDay();
  const startDaynextOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1
  ).getDay();
  let daysArray = [];
  const CalenderShow = () => {
    for (let i = 0; i < startingDay; i++) {
      daysArray.push("");
    }
    for (let i = 0; i < currentMonthDays; i++) {
      daysArray.push(i + 1);
    }
    if (startDaynextOfMonth !== 0) {
      const no_of_days_in_week = 7;
      for (let i = 0; i < no_of_days_in_week - startDaynextOfMonth; i++) {
        daysArray.push("");
      }
    }
  };

  const preMonth = () => {
    setDate((date) => {
      const newDate = new Date(date);
      newDate.setMonth(date.getMonth() - 1);
      return newDate;
    });
  };
  const postMonth = () => {
    setDate((date) => {
      const newDate = new Date(date);
      newDate.setMonth(date.getMonth() + 1);
      return newDate;
    });
  };
  const preYear = () => {
    setDate((date) => {
      const newDate = new Date(date);
      newDate.setFullYear(date.getFullYear() - 1);
      return newDate;
    });
  };
  const postYear = () => {
    setDate((date) => {
      const newDate = new Date(date);
      newDate.setFullYear(date.getFullYear() + 1);
      return newDate;
    });
  };
  return (
    <div>
      <h1> Calender App using React js</h1>
      <div className="search">
        <button
          onClick={(e) => {
            preYear();
          }}
        >
          {"<<<<"}
        </button>
        <button
          onClick={(e) => {
            preMonth();
          }}
        >
          {"<<"}
        </button>
        <div className="search" onChange={CalenderShow()}>
          {dateMonth}
        </div>
        <button
          onClick={(e) => {
            postMonth();
          }}
        >
          {">>"}
        </button>
        <button
          onClick={(e) => {
            postYear();
          }}
        >
          {">>>>"}
        </button>
      </div>
      <div>
        <div className="calenderContainer">
          {daysOfWeek.map((days, index) => (
            <div className="days" key={index}>
              {days}
            </div>
          ))}
          {daysArray.map((value, index) => (
            <div className="days" key={index}>
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
