import './style.css'

const root = document.querySelector('#app');

const div1 = document.createElement('div')
div1.innerHTML = 'div1'

const div2 = document.createElement('div')
div2.innerHTML = 'div2'
div1.appendChild(div2)

root.appendChild(div1)
// root.appendChild(div2)
