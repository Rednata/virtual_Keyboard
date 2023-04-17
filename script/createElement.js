

const createElemWithClass = (tag, name) => {
  const elem = document.createElement(tag);
  elem.className = name;
  return elem;
}

const createBTNS = (text) => {
  const btn = createElemWithClass('button', 'btn');
  btn.textContent = text;  
  return btn
}

const createBtns = (arr) => {
  const btnArray = arr.map(elem => createBTNS(elem));  
  return btnArray;
}

const createBtnArr0 = (arr) => {
  const btnArray = createBtns(arr)
  btnArray[btnArray.length - 1].className = 'btn btn_xl btn_color';    
  return btnArray;
}

const createBtnArr1 = (arr) => {
  const btnArray = createBtns(arr);
  btnArray[0].className = 'btn btn_s btn_color';
  btnArray[btnArray.length - 1].className = 'btn btn_color';
  return btnArray;
}
const createBtnArr2 = (arr) => {
  const btnArray = createBtns(arr);
  btnArray[0].className = 'btn btn_l btn_color';
  btnArray[btnArray.length - 1].className = 'btn btn_m btn_color';
  return btnArray;
}
const createBtnArr3 = (arr) => {
  const btnArray = createBtns(arr)
  btnArray[0].className = 'btn btn_l btn_color';
  btnArray[btnArray.length - 2].className = 'btn btn_color  arr arr_top';
  btnArray[btnArray.length - 1].className = 'btn btn_m btn_color';
  return btnArray;
}
const createBtnArr4 = (arr) => {
  const btnArray = createBtns(arr)
  btnArray[0].className = 'btn btn_color';
  btnArray[1].className = 'btn btn_color';
  btnArray[2].className = 'btn btn_color';
  btnArray[3].className = 'btn btn_xxl';
  btnArray[4].className = 'btn btn_color';
  btnArray[5].className = 'btn btn_color arr arr_left';
  btnArray[6].className = 'btn btn_color arr arr_down';
  btnArray[7].className = 'btn btn_color arr arr_right';
  btnArray[8].className = 'btn btn_color';
  return btnArray;
}

const createRowArray = () => {
  const rowARR = [];
  for (let i = 0; i < 5; i++) {
    const tempRow = createElemWithClass('div', `row row${i}`);
    rowARR.push(tempRow)
  }
  return rowARR
}


export {createElemWithClass, createRowArray, createBtnArr0, createBtnArr1, createBtnArr2, createBtnArr3, createBtnArr4}

