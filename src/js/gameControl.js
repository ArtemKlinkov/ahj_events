export default class GameControl {
  redrawPosition(position) {
    this.charEl = document.querySelector('.character');
    this.cellEl = Array.from(document.getElementsByClassName('cell'))[position];
    if (!this.charEl) {
      const newCharEl = document.createElement('div');
      newCharEl.classList.add('character');
      this.cellEl.appendChild(newCharEl);
      return;
    }
    this.cellEl.appendChild(this.charEl);
  }

  getNewPosition() {
    this.charEl = document.querySelector('.character');
    if (!this.charEl) {
      return Math.round(Math.random() * (4 ** 2 - 1));
    }
    this.cellEl = Array.from(document.getElementsByClassName('cell')).indexOf(this.charEl.parentElement);
    const charPosition = this.cellEl;
    let newPosition = charPosition;
    while (newPosition === charPosition) {
      newPosition = Math.round(Math.random() * (4 ** 2 - 1));
    }
    return newPosition;
  }

  start(timeout) {
    setInterval(() => { this.redrawPosition(this.getNewPosition()); }, timeout * 1000);
  }
}
