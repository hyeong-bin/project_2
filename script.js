document.querySelector('h1').innerText = "Quotes on Design"

const button = document.querySelector('button')
const quote = document.querySelector('.quote')
const byWho = document.querySelector('.who')
const photo = document.querySelector('.photo')

button.addEventListener('click', async () => {
    let response = await axios.get(
        `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`
      )
    let designQuote = response.data[Math.floor(Math.random() * response.data.length)]
    quote.innerHTML = `${designQuote.content.rendered}`
    byWho.innerHTML = `${designQuote.title.rendered}`
    let picResponse = await axios.get(`https://imsea.herokuapp.com//api/1?q=${byWho}`)
    photo.innerHTML = `<img src=${picResponse}>`
})


const myFunction = () => {
    axios.get('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand').then((response) => {
        console.log(response)
      })
  }

myFunction()
