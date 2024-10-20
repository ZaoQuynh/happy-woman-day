onload = () => {
    const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
    }, 1000);
};

var typed = new Typed('.auto-type', {
    strings: [
        "You are beautiful ❤️", 
        "You are brave ⭐", 
        "You are a ray of sunshine in my life. ☀️",
        "You deserve everything good in life. 🎁",
        "You'll do what you want 🎉",
        "I wish you all the happiness in the world. 😊", 
        "Happy Vietnamese Women's Day! 🌸"
    ],
    startDelay: 5000,
    typeSpeed: 70,  
    backSpeed: 70,
    loop: true,
    showCursor: true
});