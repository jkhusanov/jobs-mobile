// createdAt time display helper
export function timeSince(timeStamp) {
  var now = new Date(),
    secondsPast = (now.getTime() - new Date(timeStamp).getTime()) / 1000;

  if (secondsPast < 60) {
    return parseInt(secondsPast) + ' secs ago';
  }

  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + (parseInt(secondsPast / 60) === 1 ? ' min ago' : ' mins ago');
  }

  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600) + (parseInt(secondsPast / 3600) === 1 ? ' hr ago' : ' hrs ago');
  }

  if (secondsPast > 86400) {
    day = new Date(timeStamp).getDate();
    month = new Date(timeStamp).toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
    year = new Date(timeStamp).getFullYear()
    return day + " " + month + ", " + year;
  }
}