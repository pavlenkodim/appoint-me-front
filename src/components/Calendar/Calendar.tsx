"use client";
import { WEEKDAYS } from "@/lib/constants/WEEKDAYS";

interface IWeekDay {
  date: number;
  day: string;
}

const Calendar = () => {
  const date = new Date();
  const weekDays: IWeekDay[] = [
    {
      date: date.getDate(),
      day: WEEKDAYS[date.getDay()],
    },
    {
      date: date.getDate() + 1,
      day: WEEKDAYS[date.getDay() + 1],
    },
    {
      date: date.getDate() + 2,
      day: WEEKDAYS[date.getDay() + 2],
    },
    {
      date: date.getDate() + 3,
      day: WEEKDAYS[date.getDay() + 3],
    },
    {
      date: date.getDate() + 4,
      day: WEEKDAYS[date.getDay() + 4],
    },
    {
      date: date.getDate() + 5,
      day: WEEKDAYS[date.getDay() + 5],
    },
    {
      date: date.getDate() + 6,
      day: WEEKDAYS[date.getDay() + 6],
    },
  ];

  return (
    <div className="grid grid-flow-col-dense">
      {weekDays.map(({ date, day }, index) => (
        <div key={index} className="flex flex-col">
          <span>{day}</span>
          <span>{date}</span>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
