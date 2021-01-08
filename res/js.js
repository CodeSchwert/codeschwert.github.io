function lookupBg(code) {
    var keyMap = {
        'Digit1': '⚫️',
        'Digit2': '🛣',
        'Digit3': '🏠',
        'Digit4': '🏳️‍🌈',
        'Digit5': '🏛',
        'Digit6': '💽',
        'Digit7': '🌎',
        'Digit0': '🙅‍♂️',
    };

    return keyMap[code];
}

(function(){
    
    var rotateScale = .25;
    var translateScale = 5;
    var translateSmallScale = .5;
    var defaultBg = '🏳️‍🌈';
    
    var go = function(ev){
        
        window.addEventListener('mousemove', function(ev){
            var posX = (1-(ev.clientX/window.innerWidth))*translateScale - (translateScale/2);
            var posY = (1-(ev.clientY/window.innerHeight))*translateScale - (translateScale/2);
            var posSmallX = (1-(ev.clientX/window.innerWidth))*translateSmallScale - (translateSmallScale/2);
            var posSmallY = (1-(ev.clientY/window.innerHeight))*translateSmallScale - (translateSmallScale/2);
            var rotateX = (1-(ev.clientX/window.innerWidth))*rotateScale - (rotateScale/2);
            var rotateY = (ev.clientY/window.innerHeight)*rotateScale - (rotateScale/2);
            
            requestAnimationFrame(function(){
                document.querySelector('.🌈').style.transform = 
                'translateX('+posX+'em) translateY('+posY+'em) rotateY('+rotateX+'deg) rotateX('+rotateY+'deg) translateZ(-.2em)';
                
                document.querySelector('.🎒-👅').style.transform = 
                'translateX('+posSmallX+'em) translateY('+posSmallY+'em) translateZ(4em)'
            });

        });
        
        // get a handle on the background element
        var bgEl = document.querySelector('.🌈');
        // set the default background image
        bgEl.classList.add(defaultBg);

        window.onkeydown = function(e) {
            var bg = lookupBg(e.code);

            // only update the background if a bg classname was returned
            if (bg !== undefined) {
                var classArry = bgEl.className.split(' ');
                if (classArry.length === 2) {
                    classArry[1] = bg;
                }
                var classStr = classArry.join(' ');
                console.log(classStr);
                bgEl.className = classStr;
            }
        };
    };

    if (document.readyState === "interactive") go();
    else window.addEventListener('DOMContentLoaded', go);
})();