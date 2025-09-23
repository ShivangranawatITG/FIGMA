const form = document.getElementsByTagName('form')
const first = document.getElementById('first')
const second = document.getElementById('last')
const mail = document.getElementById('mail')
const number = document.getElementById('number')
const dob = document.getElementById('dob')
let submit = document.getElementById('bu')

let obj = {
    'First Name': first.value,
    ' Last Name': second.value,
    ' Email Address': mail.value,
    ' Phone Number': number.value,
    ' DOB': dob.value
}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(obj)
})