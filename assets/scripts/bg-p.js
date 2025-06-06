window.addEventListener("DOMContentLoaded", () => {
    
    particlesJS("particles-js", { "particles": { "number": { "value": 72, "density": { "enable": false, "value_area": 240.5118091298284 } }, "color": { "value": "#dddddd" }, "shape": { "type": "polygon", "stroke": { "width": 0, "color": "#ffffff" }, "polygon": { "nb_sides": 4 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.10258919341219544, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 0, "random": false, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 240.5118091298284, "color": "#dddddd", "opacity": 0.1736124811591, "width": 1.4430708547789706 }, "move": { "enable": true, "speed": 6, "direction": "top", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "window", "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "remove" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });

    // document.querySelector("#particles-js").style.height = document.body.scrollHeight + "px";
    // document.querySelector("#particles-js").style.width = document.body.scrollWidth + "px";

    // window.addEventListener('resize', () => {
        // document.querySelector("#particles-js").style.height = window.body.innerHeight + "px";
    // });
});