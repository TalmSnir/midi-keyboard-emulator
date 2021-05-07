//! pads:
const padCol1Row1 = document.querySelector(".pad-col-1-row-1");
const padCol1Row2 = document.querySelector(".pad-col-1-row-2");
const padCol2Row1 = document.querySelector(".pad-col-2-row-1");
const padCol2Row2 = document.querySelector(".pad-col-2-row-2");
const padCol3Row1 = document.querySelector(".pad-col-3-row-1");
const padCol3Row2 = document.querySelector(".pad-col-3-row-2");
const padCol4Row1 = document.querySelector(".pad-col-4-row-1");
const padCol4Row2 = document.querySelector(".pad-col-4-row-2");
const padCol5Row1 = document.querySelector(".pad-col-5-row-1");
const padCol5Row2 = document.querySelector(".pad-col-5-row-2");
const padCol6Row1 = document.querySelector(".pad-col-6-row-1");
const padCol6Row2 = document.querySelector(".pad-col-6-row-2");
const padCol7Row1 = document.querySelector(".pad-col-7-row-1");
const padCol7Row2 = document.querySelector(".pad-col-7-row-2");
const pads = document.querySelectorAll(".pad");
//!left buttons:
const shiftBtn = document.querySelector(".shift");
const transposeBtn = document.querySelector(".transpose");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");

//!right buttons:
const chevronBtn = document.querySelector(".chevron");
const soloMuteBtn = document.querySelector(".solo-mute");
const recordBtn = document.querySelector(".record");
const captureBtn = document.querySelector(".play-capture");
const apBtn = document.querySelector(".ap");
const fixedBtn = document.querySelector(".fixed-chord");

const buttons = document.querySelectorAll(".btn");

//! nobs:
const nobs = document.querySelectorAll(".nob");

//! wheels:
const wheels = document.querySelectorAll(".wheel");
const wheelLeft = document.querySelector(".left-wheel");
const slideBarLeft = document.querySelector(".slide-bar-left");
const slideBarRight = document.querySelector(".slide-bar-right");
//! keys:
const keys = document.querySelectorAll(".key");
const key1 = document.querySelector(".key-1");
const key2 = document.querySelector(".key-2");
const key3 = document.querySelector(".key-3");
const key4 = document.querySelector(".key-4");
const key5 = document.querySelector(".key-5");
const key6 = document.querySelector(".key-6");
const key7 = document.querySelector(".key-7");
const key8 = document.querySelector(".key-8");
const key9 = document.querySelector(".key-9");
const key10 = document.querySelector(".key-10");
const key11 = document.querySelector(".key-11");
const key12 = document.querySelector(".key-12");
const key13 = document.querySelector(".key-13");
const key14 = document.querySelector(".key-14");
const key15 = document.querySelector(".key-15");
const key16 = document.querySelector(".key-16");
const key17 = document.querySelector(".key-17");
const key18 = document.querySelector(".key-18");
const key19 = document.querySelector(".key-19");
const key20 = document.querySelector(".key-20");
const key21 = document.querySelector(".key-21");
const key22 = document.querySelector(".key-22");
const key23 = document.querySelector(".key-23");
const key24 = document.querySelector(".key-24");
const key25 = document.querySelector(".key-25");
//functions: a
function toggleActive(pad) {
  pad.classList.toggle("active");
  pad.classList.contains("momentary")
    ? setTimeout(() => {
        pad.classList.toggle("active");
      }, 100)
    : "";
}
function rotateNob() {
  var pointerBox = this.getBoundingClientRect();
  document.onmousemove = (e) => {
    let centerX = pointerBox.left + pointerBox.width / 2 - window.pageXOffset;
    let centerY = pointerBox.top + pointerBox.height / 2 - window.pageYOffset;
    let xRelative = e.clientX - centerX;
    let yRelative = e.clientY - centerY;
    let deg = (Math.atan2(yRelative, xRelative) / Math.PI) * 180;

    this.style.setProperty(
      "transform",
      `rotateX(30deg) translate3d(0, 0, 0.5em) rotateZ(${deg}deg)`
    );
  };
  document.onmouseup = () => {
    document.onmousemove = null;
  };
}
function spinNobCW() {
  this.style.setProperty(
    "transform",
    `rotateX(30deg) translate3d(0, 0, 0.5em) rotateZ(10deg)`
  );
}
function spinNobCCW() {
  this.style.setProperty(
    "transform",
    `rotateX(30deg) translate3d(0, 0, 0.5em) rotateZ(-10deg)`
  );
}
function moveWheel() {}
function keyPress(key) {
  key.classList.toggle("active");
  key.style.setProperty("transform", "rotateX(-13deg)");
  document.onmouseup = () => {
    key.classList.toggle("active");
    key.style.setProperty("transform", "");
  };
  document.onkeyup = () => {
    key.classList.toggle("active");
    key.style.setProperty("transform", "");
  };
}
function moveSlider() {
  let wheelTop = wheelLeft.getBoundingClientRect().top;
  document.onmousemove = (e) => {
    let yRelative = e.pageY - wheelTop;

    // yRelative = yRelative >  ? : yRelative;
    this.style.setProperty("top", yRelative + "px");
  };
  document.onmouseup = () => {
    document.onmousemove = null;
  };
}
function selectController(e) {
  e.preventDefault();
  switch (e.which) {
    case 96:
      toggleActive(padCol1Row1);
      break;
    case 110:
      toggleActive(padCol1Row2);
      break;
    case 97:
      toggleActive(padCol2Row1);
      break;
    case 98:
      toggleActive(padCol2Row2);
      break;
    case 99:
      toggleActive(padCol3Row1);
      break;
    case 100:
      toggleActive(padCol3Row2);
      break;
    case 101:
      toggleActive(padCol4Row1);
      break;
    case 102:
      toggleActive(padCol4Row2);
      break;
    case 103:
      toggleActive(padCol5Row1);
      break;
    case 104:
      toggleActive(padCol5Row2);
      break;
    case 105:
      toggleActive(padCol6Row1);
      break;
    case 107:
      toggleActive(padCol6Row2);
      break;
    case 111:
      toggleActive(padCol7Row1);
      break;
    case 106:
      toggleActive(padCol7Row2);
      break;
    case 38:
      toggleActive(plusBtn);
      break;
    case 40:
      toggleActive(minusBtn);
      break;
    case 65:
      keyPress(key1);
      break;
    case "w":
      keyPress(key2);
      break;
    case "s":
      keyPress(key3);
      break;
    case "e":
      keyPress(key4);
      break;
    case "d":
      keyPress(key5);
      break;
    case "f":
      keyPress(key6);
      break;
    case "r":
      keyPress(key7);
      break;
    case "g":
      keyPress(key8);
      break;
    case "t":
      keyPress(key9);
      break;
    case "h":
      keyPress(key10);
      break;
    case "y":
      keyPress(key11);
      break;
    case "j":
      keyPress(key12);
      break;
    case "k":
      keyPress(key13);
      break;
    case "u":
      keyPress(key14);
      break;
    case "l":
      keyPress(key15);
      break;
    case "i":
      keyPress(key16);
      break;
    case ";":
      keyPress(key17);
      break;
    case "'":
      keyPress(key18);
      break;
    case "o":
      keyPress(key19);
      break;
    case "\\":
      keyPress(key20);
      break;
    case "[":
      keyPress(key21);
      break;
    case "[":
      keyPress(key22);
      break;
    case "[":
      keyPress(key23);
      break;
    case "[":
      keyPress(key24);
      break;
    case "[":
      keyPress(key25);
      break;
    // case 49:
    //   spinNobCW(nob1);
    //   break;
  }
}
//Event Listeners:
pads.forEach((pad) =>
  pad.addEventListener("click", () => {
    toggleActive(pad);
  })
);
buttons.forEach((btn) =>
  btn.addEventListener("click", () => {
    toggleActive(btn);
  })
);
nobs.forEach((nob) => nob.addEventListener("mousedown", rotateNob));
wheels.forEach((wheel) => wheel.addEventListener("click", moveWheel));
keys.forEach((key) => key.addEventListener("mousedown", () => keyPress(key)));
slideBarRight.addEventListener("mousedown", moveSlider);
slideBarLeft.addEventListener("mousedown", moveSlider);
