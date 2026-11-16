
serial.redirectToUSB()

input.onButtonPressed(Button.A, function () {
    chatgpt.ask("Hej AI! Vad kan du hjälpa mig med?")
    basic.showIcon(IconNames.Yes)
})

input.onButtonPressed(Button.B, function () {
    chatgpt.ask("Berätta ett skämt")
    basic.showIcon(IconNames.Happy)
})
