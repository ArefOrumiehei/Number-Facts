// access to form
const form = document.querySelector('#form')

form.addEventListener('submit' , numberFact)

function numberFact(e){
    e.preventDefault()
    
    const numberInput = document.querySelector('#number').value
    const numberType = document.querySelector('#number-type').value
    const result = document.querySelector('#result')
    let url = 'http://numbersapi.com/'

    // make URL (number)
    if (numberInput !== '') {
        url = url + (numberInput + '/')
    } else {
        url = url + 'random/'
    }

    // make url (type of number)
    if (numberType !== '') {
        url += (numberType + '/')
    }

    // Ajax
    const xhr = new XMLHttpRequest()

    xhr.open("GET" , url , true)

    xhr.onload = function(){
        if(this.status === 200){
            result.innerHTML = `${this.responseText}`
        }
    }
    xhr.send()
}
