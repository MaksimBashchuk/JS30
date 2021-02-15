const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (secondsDegrees === 90) {
    secondHand.style.transition = 'none';
  } else if (minsDegrees === 90) {
    minHand.style.transition = 'none';
  } else if (hoursDegrees === 90) {  
    hourHand.style.transition = 'none';
  } else {
    secondHand.style.transition = 'all 0.05s';
    secondHand.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
  }
}

setInterval(setDate, 1000);
