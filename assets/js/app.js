/* 
TODO:
- select all important elements 
- create a function for randomly created quotes and show the output in UI
- Copy to Clipboard quotes 
*/


/* step - 1 select all important Elements  */
const quoteText = document.getElementById('quote-text');
const generateButton = document.getElementById('generate-button');
const copyQuote = document.getElementById('copy-quote');

/* step 2. create a function for randomly created quotes and show the output in UI  */
const randomQuote = async () => {
    let response = await fetch(`https://api.kanye.rest/`);
    let data = await response.json();
    quoteText.innerText = data.quote;
}

/* step 3. copy to Clipboard quotes  */
const copyRandomQuote = (event) => {
    let quoteRandomText = quoteText.innerText;
    if (window.navigator.clipboard.writeText(quoteRandomText)) {
        event.target.innerText = 'Copied';
    }
    setTimeout(() => {
        event.target.innerText = 'Copy Quote';
    }, 3000)
}
/* last step calling all of function here  */
generateButton.addEventListener('click', randomQuote);
copyQuote.addEventListener('click', copyRandomQuote);