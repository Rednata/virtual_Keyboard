import { createElemWithClass, createRowArray, createBtnArr0, createBtnArr1, createBtnArr2, createBtnArr3, createBtnArr4 } from './createElement.js';

const ARR0 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'];
const ARR1_EN = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
const ARR2_EN = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
const ARR3_EN = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '','Shift'];
const ARR4_EN = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '', '', '', 'Ctrl'];


const renderBoard = () => {
  const sectionWin = createElemWithClass('section', 'window');
  const sectionBoard = createElemWithClass('section', 'board');
  const boardBox = createElemWithClass('div', 'board__box');
  const container = createElemWithClass('div', 'container');
  const rowArray = createRowArray();
    
  const btnsArray0 =  createBtnArr0(ARR0);
  const btnsArray1 =  createBtnArr1(ARR1_EN);
  const btnsArray2 =  createBtnArr2(ARR2_EN);
  const btnsArray3 =  createBtnArr3(ARR3_EN);
  const btnsArray4 =  createBtnArr4(ARR4_EN);
  const btnArr = [];
  btnArr.push(btnsArray0, btnsArray1, btnsArray2, btnsArray3, btnsArray4);
  console.log(btnArr);
  
  rowArray.forEach((row, i) => row.append(...btnArr[i]));

  boardBox.append(...rowArray);
  sectionBoard.append(boardBox);
  container.append(sectionWin, sectionBoard);
  document.body.append(container);
}

export {renderBoard};