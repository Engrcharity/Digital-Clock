const hour = document.querySelector(".hour");
const mintues = document.querySelector(".mintues");
const seconds = document.querySelector(".seconds");
const ampm = document.querySelector(".ampm");

function getData() {
  const hourRead = new Date().getHours();
  const mintuesRead = new Date().getMinutes();
  const secondsRead = new Date().getSeconds();

  if (hourRead < 10) {
    hour.textContent = "0" + hourRead;
  } else {
    hour.textContent = hourRead;
  }
  if (mintuesRead < 10) {
    mintues.textContent = "0" + mintuesRead;
  } else {
    mintues.textContent = mintuesRead;
  }
  if (secondsRead < 10) {
    seconds.textContent = "0" + secondsRead;
  } else {
    seconds.textContent = secondsRead;
  }
  if (hourRead > 12) {
    ampm.textContent = "PM";
  }

  setTimeout(() => {
    getData();
  }, 1000);
}
getData();
