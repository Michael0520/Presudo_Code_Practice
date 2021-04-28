const lowerBtn = document.getElementById("Lowercase");
const upperBtn = document.getElementById("Uppercase");
const lastWordBtn = document.getElementById("GetLastWord");
const lastThreeWordBtn = document.getElementById("GetLastThreeWord");
const rightTriangleBtn = document.getElementById("RightTriangle");
const triangleBtn = document.getElementById("Triangle");
const diamond = document.getElementById("diamond");
const binaryBtn = document.getElementById("BinaryToDecimal");
const inputStr = document.getElementById("input");

let str;
let wordLength;

// GetString
function getStr() {
  str = inputStr.value.trim();
  wordLength = str.length;
}

// LowerCase
function LowerCase(inputValue) {
  return inputValue.toLowerCase();
}

// Uppercase
function UpperCase(inputValue) {
  return inputValue.toUpperCase();
}

// Get Last Word
function GetLastWord(inputValue) {
  return inputValue.charAt(str.length - 1);
}

// Get Last Three Word
function GetLastThreeWord(inputValue) {
  //   console.log(str.substr(1, 2));
  return inputValue.substr(str.length - 3, 5);
}

// Get Binary to Decimal
function binary(inputValue) {
  return parseInt(inputValue, 2);
}

// Event
lowerBtn.addEventListener("click", () => {
  getStr();
  let strTransform = LowerCase(str);
  document.getElementById("result").innerHTML = `
  <h3>輸入的字串長度為 ${wordLength}<br>
  轉換後 :${strTransform}<br>
  </h3>
  `;
});

upperBtn.addEventListener("click", () => {
  getStr();
  let strTransform = UpperCase(str);
  document.getElementById("result").innerHTML = `
  <h3>輸入的字串長度為 ${wordLength}<br>
  轉換後 :${strTransform}<br>
  </h3>
  `;
});

lastWordBtn.addEventListener("click", () => {
  getStr();
  let strTransform = GetLastWord(str);
  document.getElementById("result").innerHTML = `
  <h3>輸入的字串長度為 ${wordLength}<br>
  轉換後 :${strTransform}<br>
  </h3>
  `;
});

lastThreeWordBtn.addEventListener("click", () => {
  getStr();
  let strTransform = GetLastThreeWord(str);
  document.getElementById("result").innerHTML = `
  <h3>輸入的字串長度為 ${wordLength}<br>
  轉換後 :${strTransform}<br>
  </h3>
    `;
});

// Print Right Triangle
rightTriangleBtn.addEventListener("click", () => {
  let n = 6;
  let RightTriangle = "";
  for (let i = 1; i < n; i++) {
    let icon = "";
    // 控制層數
    // 換行符號需要五個
    for (let j = 0; j < i; j++) {
      icon += "♥ ";
      // 控制愛心數量
      // 愛心需要最後一行需要五個
    }
    RightTriangle += icon + "<br>";
  }
  document.getElementById("result").innerHTML = `
  <h3>${RightTriangle}
  </h3>
  `;
});

// Print Triangle
triangleBtn.addEventListener("click", () => {
  //   let n = 6;
  //   let triangle = "";
  //   for (let i = 1; i <= 5; i++) {
  //     for (let j = 1; j <= 5 - i - i; j++) {
  //       let pause = "";
  //       pause += "♠";
  //     }
  //     for (let k = 1; k <= 2 * i - 1; k++) {
  //       let icon = "";
  //       icon += "♥";
  //     }
  //     triangle += icon + pause + "<br>";
  //   }
  //   document.getElementById("result").innerHTML = `
  //   <h3>${triangle}
  //   </h3>
  //   `;
});

// Binary to Decimal
binaryBtn.addEventListener("click", () => {
  getStr();
  if (isNaN(str)) {
    alert("請輸入數字！");
  } else {
    let strTransform = binary(str);
    document.getElementById("result").innerHTML = `
    <h3>輸入的字串長度為 ${wordLength}<br>
    轉換成十進位後 :${strTransform}<br>
    </h3>
    `;
  }
});
