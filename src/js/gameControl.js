export default class GameControl {
  constructor() {
    this.showCounts = 0;
  }

  redrawPosition(position) {
    this.charEl = document.querySelector('.character');
    this.cellEl = Array.from(document.getElementsByClassName('cell'))[position];
    this.showCounts += 1;
    if (!this.charEl) {
      const newCharEl = document.createElement('div');
      newCharEl.classList.add('character');
      this.cellEl.appendChild(newCharEl);
      return;
    }
    this.cellEl.appendChild(this.charEl);
    this.checkGameOver();
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

  checkGameOver() {
    if (this.showCounts >= 5) {
      // eslint-disable-next-line no-alert
      alert('Вы проиграли!');
      const scoreEl = document.getElementsByClassName('whack-counter')[0];
      const missEl = document.getElementsByClassName('miss-counter')[0];
      scoreEl.getElementsByClassName('score')[0].innerText = 0;
      missEl.getElementsByClassName('score')[0].innerText = 0;
      this.showCounts = 0;
    }
  }
}
