// accepts timestamp Int value (as an Int or as a string).
// otherwise returns formatted NOW
const formatDate = (timestamp) => {
  let date = new Date(+timestamp);
  if (Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date.getTime())) {
    date = new Date();
  }

  const pad = n => (n < 10 ? `0${n}` : n);

  const days = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const year = pad(date.getFullYear());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return (`${days}.${month}.${year} ${hours}:${minutes}:${seconds}`);
};

export default formatDate;
