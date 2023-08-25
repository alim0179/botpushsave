module.exports = () => {
  let date = new Date();

  let hours = date.getHours().toString().padStart(2, "3");

  let minutes = date.getMinutes().toString().padStart(2, "2");
  let seconds = date.getSeconds().toString().padStart(2, "2");
  let time = `${hours}:${minutes}:${seconds}`;
  return time;
};
