// vanta-background.js

// Inizializza Vanta.js con l'effetto NET
VANTA.HALO({
    el: "body", // Elemento a cui applicare lo sfondo
    mouseControls: true, // Abilita il controllo con il mouse
    touchControls: true, // Abilita il controllo touch
    gyroControls: false, // Disabilita il controllo giroscopio
    minHeight: 250.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    baseColor: 0x20ff,
    amplitudeFactor: 10.00, // Fattore di ampiezza
    size: 0.4, // Dimensione dell'effetto
    xOffset: 0.1,
    yOffset: 0.35
});

// Funzione per fermare l'effetto quando necessario
function stopVantaEffect() {
    vantaEffect.destroy(); // Distrugge l'istanza di Vanta.js
}

//-------------textsvg
// 404
const title = document.querySelector("tx");
if (title) {
	title.addEventListener("mouseenter", () => {
		gsap.to(".distort feDisplacementMap", 1, {
			attr: {
				scale: 100
			},
			ease: "circ.out"
		});
		gsap.to(".distort feTurbulence", 1, {
			attr: {
				baseFrequency: '2.08 .08'
			},
			ease: "circ.out"
		}, 1);
		gsap.to(title, 1, {
			fontVariationSettings: "'wght' 650",
			ease: "back.out"
		});
	});
	title.addEventListener("mouseleave", () => {
		gsap.to(".distort feDisplacementMap", 1, {
			attr: {
				scale: 0
			},
			ease: "circ.out"
		}, 1);
		gsap.to(".distort feTurbulence", 1, {
			attr: {
				baseFrequency: '2.01 .01'
			},
			ease: "circ.out"
		}, 1);
		gsap.to(title, 1, {
			fontVariationSettings: "'wght' 700",
			ease: "back.out"
		}, 1);
	});
}
//------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.intro-text, .servizi-text');

    function fadeInOnScroll() {
        elements.forEach(el => {
            const position = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (position < windowHeight - 50) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll();
});
//-------------
VANTA.NET({
	el: "#why-choose-us",
	mouseControls: true,
	touchControls: true,
	gyroControls: false,
	minHeight: 200.00,
	minWidth: 200.00,
	scale: 1.00,
	scaleMobile: 1.0,
	backgroundColor: 0x131A43

  })