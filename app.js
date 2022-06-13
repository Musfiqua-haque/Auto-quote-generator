const quotes = ["There is no path to happiness; happiness is the path.", "Don't worry. Be happy.", "I have chosen to be happy because it's good for my health.", "Happiness is a journey, not a destination.", "No medicine cures what happiness cannot.", "They say a person needs just three things to be truly happy in this world: Someone to love, something to do, and something to hope for.", "Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.", "You cannot protect yourself from sadness without protecting yourself from happiness."];
const btn = document.getElementById('btn');
btn.addEventListener('click', changequote);

const output = document.getElementById('output')
function changequote() {
    console.log('text');
    const randomquote = quotes[Math.round(Math.random()*quotes.length)];
    output.innerHTML = randomquote;

}