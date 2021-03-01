//gets timezone from seconds
export const getTimezone = (seconds) => {
  const date = new Date();
  const MIN_OFFSET = seconds / 60;
  //sets date object to a specific timezone taking min offset as a parameter
  const setTimezone = (offset) => {
      if(offset >= 0) date.setMinutes(date.getMinutes() + offset);
      else date.setMinutes(date.getMinutes() - Math.abs(offset));
  }
  //UTC timezone
  const UTC_OFFSET = date.getTimezoneOffset();
  setTimezone(UTC_OFFSET);
  //getting aim city timezone from UTC 
  setTimezone(MIN_OFFSET);

  const months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
  const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

  //formatting custom timezone
  const hour = date.getHours();
  const min = date.getMinutes();
  const week_day = days[date.getDay()];
  const month_day = date.getDate();  
  const month = months[date.getMonth()].slice(0, 3);
  const year = date.getFullYear().toString().slice(2, 4);

  //custom timezone
  return `${hour}:${min} - ${week_day}, ${month_day} ${month} '${year}`;
};