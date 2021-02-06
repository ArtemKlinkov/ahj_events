export default class Gameplay {
  constructor(gameControl) {
    this.gameControl = gameControl;
    this.score = 0;
    this.whackMisses = 0;
  }

  onCellClick(event) {
    event.preventDefault();
    const charPosition = Array.from(document.getElementsByClassName('cell')).indexOf(this.gameControl.charEl.parentElement);
    const whackPosition = Array.from(document.getElementsByClassName('cell')).indexOf(event.target.parentElement);
    const scoreEl = document.getElementsByClassName('whack-counter')[0];
    const missEl = document.getElementsByClassName('miss-counter')[0];

    if (whackPosition === charPosition) {
      this.score += 1;
      scoreEl.getElementsByClassName('score')[0].innerText = this.score;
    } else {
      this.whackMisses += 1;
      missEl.getElementsByClassName('score')[0].innerText = this.whackMisses;
    }

    if (this.whackMisses === 5) {
      // eslint-disable-next-line no-alert
      alert('Вы проиграли!');
      this.score = 0;
      this.whackMisses = 0;
      scoreEl.getElementsByClassName('score')[0].innerText = this.score;
      missEl.getElementsByClassName('score')[0].innerText = this.whackMisses;
    }
  }

  init() {
    this.gameBoard = document.getElementById('game-container');
    this.gameBoard.addEventListener('click', (event) => this.onCellClick(event));
  }
}
