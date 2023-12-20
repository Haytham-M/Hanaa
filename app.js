const button = document.getElementById('btn');
const text = document.getElementById('text');

let isFirstClick = true;

const loveExpressions = [
    // ... (your existing love expressions)
    "You're awesome 😍",
      "You're so cute 🥰",
      "I appreciate you 🙏",
      "I'm lucky to have you 🎉",
      "I love your smile 😊",
      "I love spending time with you ⏰",
      "I love the way you think 🧠",
      "You make my day 🌞",
      "I love the way you make me feel 😌",
      "I love how you support me 🤗",
      "You're a gift to me 🎁",
      "I'm glad I know you 🌟",
      "I'm thankful for your presence in my life 🙏",
      "I love you just the way you are 💯",
      "I love how you listen to me 🎧",
      "I love how you take care of me 🏥",
      "You're the best friend I could ask for 🐶",
      "You're the love of my life 💌",
      "You're the best 🥇",
      "You're the light of my life 💡",
      "You're my world 🌐",
      "You're my everything 🌌",
      "You're my soulmate 💓",
      "You're my better half 🧑‍❤️‍🧑",
      "You're my partner in crime 🦹‍♀️",
      "You're my true love 💝",
      "You're my dream 💤",
      "You're my sweetheart 🍭",
      "You're my favorite 🌈",
      "You're my other half 🕊️",
      "You're my strength 💪",
      "You're my life 💗",
      "You're my hope 🌊",
      "You're my reason for smiling 😄",
      "You're my motivation 🏃‍♀️",
      "You're my source of happiness 😊",
      "You're my best friend 👧",
      "You're my hero 🦸‍♀️",
      "You're my protector 🛡️",
      "You're my support 🤗",
      "You're my sunshine 🌞",
      "You're my angel 👼",
      "You're my ray of sunshine ☀️",
      "You're my lucky charm ☀️",
      "You'🍀re my moon and stars 🌙",
      "You're my star in the night sky 🌃",
];

// Create an audio element
const audio = new Audio('music/love.mp3');
audio.preload = 'auto';

button.addEventListener('click', () => {
    // Play the sound effect
    audio.play();

    if (isFirstClick) {
        text.textContent = "I love you, Hanaa 💖";
        isFirstClick = false;
    } else {
        const randomIndex = Math.floor(Math.random() * loveExpressions.length);
        text.textContent = loveExpressions[randomIndex];

        // Create confetti
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.setProperty('--x', Math.random());
        confetti.style.setProperty('--y', Math.random());
        document.body.appendChild(confetti);

        // Remove confetti after animation
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
});