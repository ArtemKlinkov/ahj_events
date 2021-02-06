import GameControl from './gameControl';
import Gameplay from './gameplay';

const gameControl = new GameControl();
const gameplay = new Gameplay(gameControl);

gameplay.init();
gameControl.start(1);
