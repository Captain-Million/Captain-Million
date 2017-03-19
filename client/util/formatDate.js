const formatDate = (date) => {
  return (`${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
};

export default formatDate;
