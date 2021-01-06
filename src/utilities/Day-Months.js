const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
const currentDate = date.getDate();
const currentDay = days[date.getDay()];
const currentMonth = months[date.getMonth()];
const currentYear = date.getFullYear();

export const dateObject = {
  currentDate,
  currentDay,
  currentMonth,
  currentYear,
};
