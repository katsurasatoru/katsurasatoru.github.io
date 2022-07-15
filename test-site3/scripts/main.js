let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/food_ramen_woman.png') {
      myImage.setAttribute('src','images/yatai_ra-men_man.png');
    } else {
      myImage.setAttribute('src','images/food_ramen_woman.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('あなたの名前を入力してください。');
    if(!myName){
        setUserName();
    }else
    localStorage.setItem('name', myName);
    myHeading.textContent = 'ラーメンはいいぞ、' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'ラーメンはいいよ、' + storedName;
}

myButton.onclick = function() {
    setUserName();
}