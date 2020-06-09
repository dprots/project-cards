export default class Modal {
  constructor (classList, title) {
    this._classList = classList;
    this._title = title;
    this.elem = null;
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList = this._classList;
    this.elem.innerHTML = `<h3>${this._title}</h3>`;
    return this.elem;
  }

  close() {
    const modal = document.querySelector('.modal');

    modal.addEventListener('click', function(e) {
      if (e.target === this.querySelector('[type="reset"]')) {
        modal.remove()
      }
    });

    document.onmousedown =  function (e) {
      if (!e.target.closest('.modal')) {
        modal.remove();
      }
    };

    document.onkeyup = function (e) {
      if (e.key === "Escape") {
        modal.remove()
      }
    };
  }
}