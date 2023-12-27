import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { CalculateIMC, notNumber } from './utils.js'

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = function (event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height);

    if(weightOrHeightIsNotNumber) {
        AlertError.open()
        return;
    }
    AlertError.close()
    
    const result = CalculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage (result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}