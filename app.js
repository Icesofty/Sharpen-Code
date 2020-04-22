const lockOne = document.querySelector(".lockerFirst");
const lockTwo = document.querySelector(".lockerSecond");

lockOne.addEventListener("click", lockerFirst);
lockTwo.addEventListener("click", lockerSecond);
document.getElementById("btn").onclick = challenge;

function lockerFirst() {
  if (lockOne.className === "em em-lock lockerFirst") {
    lockOne.className = "em em-unlock lockerFirst";
  } else {
    lockOne.className = "em em-lock lockerFirst";
  }
}

function lockerSecond() {
  if (lockTwo.className === "em em-lock lockerSecond") {
    lockTwo.className = "em em-unlock lockerSecond";
  } else {
    lockTwo.className = "em em-lock lockerSecond";
  }
}

function challenge() {
  const motivation = [
    "em---1",
    "em-fire",
    "em-boom",
    "em-facepunch",
    "em-muscle",
    "em-raised_hands",
    "em-boxing_glove",
    "em-clap",
    "em-dark_sunglasses"
  ];

  const first = [
    "a form",
    "a landing page",
    "a music player",
    "a Blog",
    "a chatroom",
    "a Dating App",
    "an eCommerce",
    "a feed Reader",
    "a basic Game",
    "a budgeting app",
    "a monitoring system",
    "a URL shortner",
    "a Blockchain",
    "a Chat Support",
    "an Admin panel",
    "a Product management tool",
    "a Cloud storage tool",
    "a directory",
    "a Donation system",
    "a Learning Classroom",
    "a Marketing tool",
    "an appointment tool",
    "a Video player"
  ];
  const second = [
    "a Music Band",
    "the Government",
    "Freelancers",
    "GoT Fans",
    "a close Friend",
    "a Designer",
    "a Photographer",
    "an hospital",
    "Tesla",
    "a lawyer firm",
    "a music festival",
    "a TV channel",
    "a local grocery",
    "Netflix users",
    "Glitch.com",
    "Elon Musk",
    "Apple users",
    "students",
    "Bitcoin users",
    "a secret agent",
    "a gym",
    "Mozilla",
    "your mom",
    "a bank",
    "Wall Street",
    "a non-governmental organization",
    "a Zoo",
    "Ford",
    "Greenpeace",
    "Reddit",
    "GitHub",
    "a hotel"
  ];

  rColor();

  const rMotivation = motivation[Math.floor(Math.random() * motivation.length)];
  const rFirst = first[Math.floor(Math.random() * first.length)];
  const rSecond = second[Math.floor(Math.random() * second.length)];

  document.getElementById("motivation").className = "em " + rMotivation;

  if (lockOne.className === "em em-unlock lockerFirst") {
    document.getElementById("first").innerHTML = rFirst;
  }

  if (lockTwo.className === "em em-unlock lockerSecond") {
    document.getElementById("second").innerHTML = rSecond;
  }
}

function rColor() {
  const colors = [
    "color1",
    "color2",
    "color3",
    "color4",
    "color5",
    "color6",
    "color7",
    "color8",
    "color9"
  ];

  const rColors = colors[Math.floor(Math.random() * colors.length)];

  let colorSelector = document.getElementsByClassName("color");
  for (var i = 0; i < colorSelector.length; i++) {
    colorSelector[i].className = "color " + rColors;
    console.log(colorSelector[i].className);
  }
}
