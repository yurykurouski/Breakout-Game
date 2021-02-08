function clearCanvas() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    if (!canvas) {
        return
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export default clearCanvas;