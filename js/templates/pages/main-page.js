const mainTemplate = 
`
<div class="banner banner-greeting"></div>
<span class="payer_name"> </span>
<span class="score">Score: </span>

<canvas id="canvas" width="600px" height="450px"></canvas>
<div class="game-operators">
    <button id="pause-game-btn">Pause</button>
    <button id="restart-game-btn"><i class="fas fa-redo"></i></button>
    <button id="start-game-btn" disabled>Start</button>
</div>
<div class="asside-buttons">
    <button id="settings-btn"><i class="fas fa-cog"></i></button>
    <button id="records-btn"><i class="fas fa-trophy"></i></button>
</div>

`

export default mainTemplate;


