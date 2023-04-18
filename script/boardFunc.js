

const onClickKeyBoard = (textLeft, textRight) => {
  const board = document.querySelector('.board');
  const monitor = document.querySelector('.monitor');

  if (textRight && textLeft) {
    board.addEventListener('click', ({target}) => {
      let key = '';
      if (target.classList.contains('btn')) {
        key = target.textContent;
      }   
      if (key.length === 1) {
        textLeft += key;
        
        console.log(textLeft)
        console.log(textRight);
        monitor.textContent = textLeft + textRight;     
      } else {
        switch(key) {
          case('Space'):
          key = ' ';
          textLeft += key;
          monitor.textContent = textLeft + textRight;     
          break;
  
          case('BackSpace'):
          console.log('+++');
          const temp = monitor.textContent;
          monitor.textContent = temp.slice(0, temp.length - 1);
          console.log(temp);
        }
      }
    })


  } else {
    let text = '';
    board.addEventListener('click', ({target}) => {
      let key = '';
      if (target.classList.contains('btn')) {
        key = target.textContent;
      } 
      if (key.length === 1) {
        text += target.textContent;
        monitor.textContent = text;     
      } else {
        switch(key) {
          case('Space'):
          text += ' ';
          monitor.textContent = text;     
          break;
  
          case('BackSpace'):
          console.log('+++');
          const temp = monitor.textContent;
          monitor.textContent = temp.slice(0, temp.length - 1);
          console.log(temp);
        }
      }
    })
  }
  
}

const onClickMonitor = () => {
  const board = document.querySelector('.board');
  const monitor = document.querySelector('.monitor');
  monitor.addEventListener('click', (e) => {
    const pos = monitor.selectionStart;
    let text = monitor.value;
    let textLeft = text.slice(0, pos);
    
    let textRight = text.slice(pos, text.length);
    console.log('textLeft: ', textLeft);
    console.log('textRight: ', textRight);

    
    
    console.log('text: ', text);
    console.log(monitor.selectionStart);
    console.log(monitor.selectionEnd);
    // monitor.selectionStart = monitor.selectionEnd = 5;
    onClickKeyBoard(textLeft, textRight);
  })
}

const boardFunction = () => {
  onClickKeyBoard();
  onClickMonitor();

  
}

export{boardFunction};