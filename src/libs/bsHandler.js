/**
 * @class
 * @classdesc Class that handle bootstrap
 * @author Marco Tribuzio
 */
class BsHandler {

  static createModal (idToSearch) {
    const modal = new bootstrap.Modal(document.getElementById(idToSearch), {
      keyboard: false
    })
    return modal
  }

  static showModal (modalInstance) {
    modalInstance.show()
  }

  static hideModal(modalInstance) {
    modalInstance.hide()
  }

}

export default BsHandler