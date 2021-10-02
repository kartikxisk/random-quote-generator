window.addEventListener('load', function(){
    fatchQuote();
})

function randomQuoteGenerator(){
    fatchQuote();
    const quote = document.querySelector('.quote');
    quote.classList.add('jiggle-animation');
}
 
async function fatchQuote(){
    const appendQuote = document.querySelector('.append-quote');
    let res = await fetch('https://api.quotable.io/random');
    let data = await res.json();
    if(res.status === 200){
        appendQuote.innerHTML = `
              <div class="quote">
                    <div class="quote-tag">
                        <small>${data.tags[0].replace('-',' ')}</small>
                    </div>
                    <div class="quote-content">
                        <p>${data.content}</p>
                        <small>- ${data.author}</small>
                    </div>
                </div>
        `;
    }
    else{
        appendQuote.innerHTML = `
        <div class="quote">
             <p>OOPs, Something went wrong. Please try again</p>
          </div>
  `;
    }
}
