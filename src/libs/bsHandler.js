/**
 * @class
 * @classdesc Class that handle bootstrap
 * @author Marco Tribuzio
 */
class BsHandler {

  toast = null;
  modal = null;
  modalDescription = null
  modalTitle = null

  /*
  Modal Section
  todo split in other file
   */

  static createModal(idToSearch) {
    this.modal = new bootstrap.Modal(document.getElementById(idToSearch), {
      keyboard: false
    })
  }

  static showModal() {
    if(!this.modal) this.createModal('modal')
    this.modal.show()
  }

  static hideModal() {
    this.modal.hide()
  }

  static getTitleModal(){
    this.modalTitle = document.getElementById('modalDescription')
  }

  static setTitleTextModal(textToInsert){
    if (!this.modalTitle) this.getDescriptionModal()
    this.modalTitle.innerText = textToInsert
  }

  static getDescriptionModal(){
    this.modalDescription = document.getElementById('modalDescription')
  }

  static setDescriptionTextModal(textToInsert){
    if (!this.modalDescription) this.getDescriptionModal()
    this.modalDescription.innerText = textToInsert
  }

  static getCloseButton(){

  }

  static getOkButton(){

  }

  /*
  Toast Section
  todo split in other file
   */

  static createToast(idToSearch){
    this.toast = new bootstrap.Toast(document.getElementById(idToSearch))
  }

  static showToast() {
    if (!this.toast) this.createToast('toast')
    this.toast.show()
  }

  static hideToast() {
    this.toast.hide()
  }

  /*
  Card Section
  todo split in other file
  */
  static createCard(title, description, img, id){
    const beerListElement = document.getElementById('beerList')

    let col = document.createElement('div')
    col.className = 'col'

    let card = document.createElement('div')
    card.className = 'card'
    card.setAttribute('value', id)

    let cardImg = document.createElement('img')
    cardImg.className = 'card-img-top'
    cardImg.src = img

    let cardBodyDiv = document.createElement('div')
    cardBodyDiv.className = 'card-body'

    let cardTitleDiv = document.createElement('h5')
    cardTitleDiv.className = 'card-title'
    cardTitleDiv.innerText = title

    let cardDescriptionDiv = document.createElement('p')
    cardDescriptionDiv.className = 'card-text'
    cardDescriptionDiv.innerText = description

    let buttonDiv = document.createElement('a')
    buttonDiv.className = 'btn btn-primary'
    buttonDiv.innerText = 'Open Details'
    buttonDiv.setAttribute('value', id)
    buttonDiv.addEventListener('click', function (e) {
      e.stopPropagation()

      BsHandler.showModal()
    })

    cardBodyDiv.append(cardTitleDiv)
    cardBodyDiv.append(cardDescriptionDiv)
    cardBodyDiv.append(buttonDiv)

    card.appendChild(cardImg)
    card.appendChild(cardBodyDiv)

    col.appendChild(card)

    beerListElement.appendChild(col)

  }


}

export default BsHandler