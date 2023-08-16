import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <p className="text-2xl font-semibold mt-5 ">Select check-in date</p>
      <p className="text-sm text-gray-400 mb-5">
        Add your travel dates for exact pricing
      </p>
      <div className="flex justify-between">
        <Calendar
          calendarType={"islamic"}
          onChange={handleDateChange}
          value={selectedDate}
        />
      </div>
    </div>
  );
};

export default Calender;
