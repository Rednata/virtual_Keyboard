import { boardFunction } from './boardFunc.js';
import { renderBoard } from './renderBoard.js';




const init = () => {
  renderBoard();
  boardFunction();

};

init()







  document.onselectionchange = function() {
    let {anchorNode, anchorOffset, focusNode, focusOffset} = document.getSelection();
    console.dir(anchorNode);

    from.value = `${anchorNode && anchorNode.data}:${anchorOffset}`;
    to.value = `${focusNode && focusNode.data}:${focusOffset}`;
  };
