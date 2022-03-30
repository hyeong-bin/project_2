const designTitle = document.querySelector('.designtitle')
designTitle.innerHTML = "A piece of advice for designers"

const button = document.querySelector('button')
const quote = document.querySelector('.quote')
const byWho = document.querySelector('.who')

button.addEventListener('click', async () => {
    let response = await axios.get(
        `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`
      )
    let designQuote = response.data[Math.floor(Math.random() * response.data.length)]
    quote.innerHTML = `${designQuote.content.rendered}`
    byWho.innerHTML = `${designQuote.title.rendered}`
})

const button2 = document.querySelector('.button2')
const quote2 = document.querySelector('.quote2')
// const byWho2 = document.querySelector('.who2')

// button2.addEventListener('click', async () => {
//     let slipResponse = await axios.get(
//         `https://api.adviceslip.com/advice`
//       )
//     let slipQuote = slipResponse.data
//     quote2.innerHTML = `${slipQuote.slip.advice}`
//     // byWho2.innerHTML = `${slipQuote.title.rendered}`
// })

const myFunction = () => {
    axios.get('https://api.adviceslip.com/advice').then((response) => {
        console.log(response)
      })
  }

myFunction()
