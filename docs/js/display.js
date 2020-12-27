let displayInfo = true;
const toggleDisplay = () => {
  displayInfo = !displayInfo;
  const cardElements = [...document.getElementsByClassName('card-item')];

  cardElements.forEach(el => {
    infoElements = [...el.getElementsByClassName('card-info')];
    imageElements = [...el.getElementsByClassName('card-image')];
    if (displayInfo) {
      el.classList.replace('col-md-2', 'col-md-6');
      infoElements.forEach(showElement);
      imageElements.forEach(imageElement => imageElement.classList.replace('col-12', 'col-4'))
    } else {
      el.classList.replace('col-md-6', 'col-md-2');
      infoElements.forEach(hideElement);
      imageElements.forEach(imageElement => imageElement.classList.replace('col-4', 'col-12'))
    }
  });
}
