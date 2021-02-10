const settingsTemplate = 
`
<div class="banner banner-info"></div>
<button class="back-btn"><i class="fas fa-backward"></i></button>
<form action="" class="settings-from">
    <div class="speed-settings-fields">
        <h3>Ball speed</h3>

        <div class="settings-field">
            <input type="radio" id="speed_1" name="speed" value="4" checked>
            <label for="speed_1">1x</label>
        </div>
        
        <div class="settings-field">
            <input type="radio" id="speed_2" name="speed" value="6">
            <label for="speed_2">1.5x</label>
        </div>

        <div class="settings-field">
            <input type="radio" id="speed_3" name="speed" value="8">
            <label for="speed_3">2x</label>
         </div>
    </div>

    <div class="paddle-settings-fields">
        <h3>Paddle size</h3>

        <div class="settings-field">
            <input type="radio" id="size_1" name="size" value="80" checked>
            <label for="size_1">1x</label>
        </div>

        <div class="settings-field">
            <input type="radio" id="size_2" name="size" value="60">
            <label for="size_2">0.75x</label>
        </div>


        <div class="settings-field">
            <input type="radio" id="size_3" name="size" value="40">
            <label for="size_3">0.5x</label>
        </div>
    </div>
    
    <button id="settings-submit-btn" type="submit">Done</button>
</form>
`

export default settingsTemplate;