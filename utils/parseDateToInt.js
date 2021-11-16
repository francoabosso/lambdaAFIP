const parseDateToInt = (date) => {
  return date && parseInt(date.replace(/-/g, ""));
};

module.exports = {
  parseDateToInt,
};
