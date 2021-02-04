//setInterval для того, чтобы искать канвас после его рендеринга
export const drawScore = function () {

    const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        let score = 0;
        
    
        ctx.font = '1.5rem Montserrat';
    ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
    

    // const thisInterval = setInterval(() => {
    // if (document.getElementById("canvas") != null) {

    //     const canvas = document.getElementById('canvas');
    //     const ctx = canvas.getContext('2d');
    //     let score = 0;
        
    
    //     ctx.font = '1.5rem Montserrat';
    //     ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
    
    
    // clearInterval(thisInterval)
    // }

    // }, 500);
}