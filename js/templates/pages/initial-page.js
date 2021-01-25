const startTemplate = `
<div class="banner"><span>Enter username and press Run</span></div>
<button id="rules-btn">Rules</button>
<div id="rules" class="rules">
    <h3>How to play</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam unde eaque odit, corporis voluptates perferendis
    tempore eligendi sint. Ea quam suscipit inventore esse saepe asperiores id at non perferendis fugiat!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, magnam.</p>
    <button id="close-rules-btn">Close</button>
</div>
<button id="nigth-mode-btn">night</button>

<H1>Breakout!</H1>
<form action="" id="run-game-form">
    <input type="text" name="name" maxlength="15" placeholder="Enter your name...">
    <button id="run-game-btn" type="submit">Run</button>
</form>
`
export default startTemplate;