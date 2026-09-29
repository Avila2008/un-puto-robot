radio.setGroup(1)

input.onButtonPressed(Button.A, function () {
    radio.sendString("adelante")
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("atras")
})

input.onButtonPressed(Button.AB, function () {
    radio.sendString("alto")
})

input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("izquierda")
})

input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("derecha")
})
radio.setGroup(1)

function adelante() {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}

function atras() {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}

function izquierda() {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}

function derecha() {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}

function alto() {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}

radio.onReceivedString(function (mensaje) {
    if (mensaje == "adelante") {
        adelante()
    } else if (mensaje == "atras") {
        atras()
    } else if (mensaje == "izquierda") {
        izquierda()
    } else if (mensaje == "derecha") {
        derecha()
    } else if (mensaje == "alto") {
        alto()
    }
})