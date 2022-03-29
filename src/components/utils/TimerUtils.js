import moment from "moment";

// this function recive a date string, and return remaining days, hours, minutes and seconds on one object
export const getRemainingTime = (date) => {
  const endDate = moment(date);
  const now = moment();
  // validate if the date is in the past
  if (now.isAfter(endDate)) {
    return {
      days: "0",
      hours: "0",
      minutes: "0",
      seconds: "0",
    };
  }
  const remainingTime = endDate.diff(now);
  const duration = moment.duration(remainingTime);
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  return { days, hours, minutes, seconds };
};
