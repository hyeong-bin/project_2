const designTitle = document.querySelector('.designtitle')
designTitle.innerHTML = "A piece of advice for designers"

const button = document.querySelector('button')
let quote = document.querySelector('.quote')
let byWho = document.querySelector('.who')

button.addEventListener('click', async () => {
    let response = await axios.get(
        `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`
      )
    let designQuote = response.data[Math.floor(Math.random() * response.data.length)]
    quote.innerHTML = `${designQuote.content.rendered}`
    byWho.innerHTML = `${designQuote.title.rendered}`
})

const button2 = document.querySelector('.button2')

button2.addEventListener('click', async () => {
    let slipResponse = await axios.get(
        `https://api.adviceslip.com/advice`
      )
    let slipQuote = slipResponse.data
    quote.innerHTML = `${slipQuote.slip.advice}`
    byWho.innerHTML = ""
})

const myFunction = () => {
    axios.get('https://api.adviceslip.com/advice').then((response) => {
        console.log(response)
      })
  }

myFunction()
