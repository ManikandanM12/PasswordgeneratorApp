const outputElement = document.getElementById("output");
const copyElement = document.getElementById("btncopy");
const PasswordLength = document.getElementById("passwordLength");
const numberCheck = document.getElementById("numberCheck");
const capitalCheck = document.getElementById("capitalCheck");
const smallCheck = document.getElementById("smallCheck");
const symbolCheck = document.getElementById("symbolCheck");
const submit= document.getElementById("form");

copyElement.addEventListener("click", async () => {
  const copied = outputElement.value;

  if (copied) {
    await navigator.clipboard.writeText(copied);
    alert("Password is copied");
  } else {
    alert("No text to copy!");
  }
});
//Create a Random Capital Characters
function createRandomChar(min, max) {
  const limit = max - min + 1;
  return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}

//Create a Random Small Characters
function createRandomSmallChar() {
  return createRandomChar(97, 122);
}

//Create a Random Symbols
function createRandomSymbols() {
  const symbols = "!@#$%^&*()_+-={}|:>?</.,;][";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//Create a Random Numbers
function createRandomNumbers() {
  return createRandomChar(48, 57);
}
function createCapitalChar(){
    return createRandomChar(65,90)
}


var randomElementArray = [
  {
    checkbox: numberCheck,
    create: createRandomNumbers
  },
  {
    checkbox: capitalCheck,
    create: createCapitalChar
  },
  {
    checkbox: smallCheck,
    create: createRandomSmallChar
  },
  {
    checkbox: symbolCheck,
    create: createRandomSymbols
  },
];

submit.addEventListener('submit', (event)=>{
    event.preventDefault();
    var length=PasswordLength.value
    var generatedPassWord=""
    var randomArrayChecked=randomElementArray.filter(({checkbox})=>checkbox.checked)

  for(let i=0;i<length;i++){
    const index=Math.floor(Math.random()*randomArrayChecked.length)
    const letter=randomArrayChecked[index].create()
    generatedPassWord+=letter
  }
  if(PasswordLength.value<8){
    alert("Password length must be at least 8 characters")
    
  }
    outputElement.value=generatedPassWord
})


