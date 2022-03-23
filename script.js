document.querySelector('h1').innerText = "Title"

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


const myFunction = () => {
    axios.get('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand').then((response) => {
        console.log(response)
      })
  }

myFunction()