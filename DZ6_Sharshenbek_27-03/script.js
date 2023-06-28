document.querySelector('.btn').addEventListener('click', () => {
    console.log('вы нажали на кнопку')
})

const btn = document.querySelectorAll('.btn')
console.log(btn)

const div = document.createElement('div')
div.classList.add('wrapper')
const body = document.body
body.appendChild(div)
const header = document.createElement('h1')
header.textContent = 'Frontend 27-03'
body.appendChild(header)

const ul = `
<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>
`

div.innerHTML = ul

const input = document.querySelector('input')
const increment = document.querySelector('#increment')
const decrement = document.querySelector('.decrement')

increment.onclick = () =>{
    function addOne() {
        increment++
        return increment
    }
    addOne
}