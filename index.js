const resetBtn = document.querySelector(".reset"); // Resetis gilaki;
const billInput = document.querySelector(".bill-input"); // bill inputis cvladi;
const peopleInput = document.querySelector(".people-input");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const textInputs = document.querySelector(".input");
const tip = document.querySelector(".tip");
const tipButtons = document.querySelectorAll(".tips");
const customTip = document.getElementById("custom-Tip");
const error = document.querySelector(".error");

billInput.placeholder = 0;
peopleInput.placeholder = 0;

billInput.addEventListener("input", function () {
  const typedText = billInput.value;
  totalAmount.textContent = "$" + (typedText / peopleInput.value).toFixed(2);
});

peopleInput.addEventListener("input", () => {
  totalAmount.textContent =
    "$" + (billInput.value / peopleInput.value).toFixed(2);
});

//tipis kalkulacia
tipButtons.forEach((button) => {
  // yvela gilaks gadauvlis forEachit da titoeuls daarqmevs button-s
  button.addEventListener("click", function () {
    // am fsevdo button-ebs davamated listeneri klickze da funqcia gaeshva.

    //kalkulacia xdeba aq da cvladshi shegvaqvs

    const tipAmountResult =
      (Math.floor(billInput.value) / peopleInput.value) *
      parseFloat(button.value / 100);
    console.log(tipAmountResult); // akonsolebs ras gamoiangarishebs

    //cvladi chavsete HTML-shi
    tipAmount.innerHTML = "$" + tipAmountResult.toFixed(2);

    //aqidan ukve shen iwyeb :)
    const totalAmountResult =
      tipAmountResult + billInput.value / peopleInput.value;
    totalAmount.innerHTML = "$" + totalAmountResult.toFixed(2);
    console.log(totalAmountResult);

    customTip.addEventListener("input", function () {
      const tipValue = parseFloat(customTip.value);
      const tipAmountResult =
        (Math.floor(billInput.value) / peopleInput.value) *
        parseFloat(tipValue / 100);
      console.log(tipAmountResult);
    });

    customTip.value = "";

    // aq daamtavre

    // movashore klasi  sxva gilaklze daklikebisas
    tipButtons.forEach(function (btn) {
      btn.classList.remove("clicked");
    });
    // mivaniche klasi daklikebisas

    button.classList.add("clicked");
  });
});

peopleInput.addEventListener("input", () => {
  if (peopleInput.value < 1) {
    peopleInput.classList.add("inputError");
    error.style.display = "flex";
  } else {
    error.style.display = "none";
    peopleInput.classList.remove("inputError");
  }
});

customTip.addEventListener("input", () => {
  const customTipValue = parseFloat(customTip.value);

  const tipAmountResult =
    (Math.floor(billInput.value) / peopleInput.value) *
    parseFloat(customTipValue / 100);
  tipAmount.innerHTML = "$" + tipAmountResult.toFixed(2);

  const totalAmountResult =
    tipAmountResult + billInput.value / peopleInput.value;
  totalAmount.innerHTML = "$" + totalAmountResult.toFixed(2);
});

customTip.addEventListener("click", () => {
  tipButtons.forEach((btn) => {
    btn.classList.remove("clicked");
  });
});

// tipis kalculacia

//anulebs yvelafers kalkulatorshi :)
resetBtn.addEventListener("click", function () {
  billInput.value = "";
  peopleInput.value = "";
  tipAmount.innerHTML = "$" + (0.0).toFixed(2);
  totalAmount.innerHTML = "$" + (0.0).toFixed(2);
  tipButtons.forEach(function (buttons) {
    buttons.classList.remove("clicked");
  });
  customTip.value = "";
});
