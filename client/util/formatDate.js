const formatDate = (date = new Date()) => {
  if (typeof date.getMonth !== 'function') return date;
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
