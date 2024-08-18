const DROPZONE_CLASSNAME = 'dropzone';

const draggableElement = document.querySelectorAll('[draggable="true"]');
const draggTarget = document.querySelectorAll('.dropzone');
const log = document.querySelector('.event-log-contents');

if (draggableElement) {
  let dragged = null;

  draggableElement.forEach((item) => {
    item.addEventListener('error', (event) => {
      log.textContent += `${event.type}: Loading \n`;
    });

    item.addEventListener('dragstart', (event) => {
      event.target.classList.add('dragged');
      dragged = event.target;
      //event.dataTransfer.setData('text/plain', 'This text may be dragged');
    });

    item.addEventListener('dragend', (event) => {
      event.target.classList.remove('dragged');
      //event.target.parentNode.classList.add('elemet-added');
      //log.textContent += `${event.type}: ${event.target} \n`;
      //event.dataTransfer.setData('text/plain', 'This text may be dragged');
    });

    item.addEventListener('dragenter', (event) => {
      // highlight potential drop target when the draggable element enters it
      if (event.target.classList.contains(DROPZONE_CLASSNAME)) {
        event.target.classList.add('dragover');
        //log.textContent += `${event.type}: entered \n`;
      }
    });
  });

  draggTarget.forEach((item) => {
    item.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    item.addEventListener('drop', (event) => {
      event.preventDefault();
      if (event.target.className === DROPZONE_CLASSNAME) {
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
        //log.textContent += `${event.type}: ${event.target} \n`;
      }
    });
  });
}
