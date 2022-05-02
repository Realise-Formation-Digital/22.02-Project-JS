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
    this.toast.show()
  }

  static hideToast() {
    this.toast.hide()
  }

}

export default BsHandler