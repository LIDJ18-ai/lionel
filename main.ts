
serial.redirectToUSB()

input.onButtonPressed(Button.A, function () {
    serial.writeLine("Hej AI! Vad kan du hjälpa mig med?")
    basic.showIcon(IconNames.Yes)
})

input.onButtonPressed(Button.B, function () {
    serial.writeLine("Berätta ett skämt")
    basic.showIcon(IconNames.Happy)
})

