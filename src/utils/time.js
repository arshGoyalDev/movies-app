// format release date Args: date
const modifyDate = (date) => {
  let releaseDate = new Date(date);
  let month = releaseDate.toLocaleString("default", {month: "long"});
  date = addThToDate(releaseDate.getDate());
  let year = releaseDate.getFullYear();

  return <span>{`${date} ${month}, ${year}`}</span>;
};

const addThToDate = (date) => {
  let output = "";
  if (date === 1 || date === 21 || date === 31) {
    output = `${date}st`;
  } else if (date === 2 || date === 22) {
    output = `${date}nd`;
  } else if (date === 3 || date === 23) {
    output = `${date}rd`;
  } else {
    output = `${date}th`;
  }

  return output;
};

// convert minutes to hours Args: mins
const convertMinsToHrsMins = (mins) => {
  let hours = Math.floor(mins / 60) + "hrs";
  mins = (mins % 60) + "mins";
  return `${hours} ${mins}`;
};

export {modifyDate, convertMinsToHrsMins};
