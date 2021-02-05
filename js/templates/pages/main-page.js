import game from '../../game.js'


const mainTemplate = 
`
<div class="banner banner-greeting"></div>
<h2>Breakout!</h2>
<span class="payer_name"> </span>
<span class="score">Score: </span>

<canvas id="canvas" width="600px" height="450px"></canvas>
<button id="pause-game-btn">Pause</button>
<button id="start-game-btn" disabled>Start</button>
`

export default mainTemplate;


