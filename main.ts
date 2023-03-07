let tijd_5 = 0
let tijd_4 = 0
let tijd_3 = 0
let tijd_2 = 0
let tijd_1 = 0
let tijd_0 = 0
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
serial.writeLine("test 1 2 3 ")
let fase = 0
let laag = 255
laag = 512
if (true) {
    let hoog = 0
    if (fase == 0 && pins.analogReadPin(AnalogPin.P0) > hoog) {
        tijd_0 = input.runningTimeMicros()
        fase = 1
        led.plot(0, 0)
    }
    if (fase == 1 && pins.analogReadPin(AnalogPin.P0) < laag) {
        tijd_1 = input.runningTimeMicros()
        fase = 2
        led.plot(1, 0)
    }
    if (fase == 2 && pins.analogReadPin(AnalogPin.P1) > hoog) {
        tijd_2 = input.runningTimeMicros()
        fase = 3
        led.plot(2, 0)
    }
    if (fase == 3 && pins.analogReadPin(AnalogPin.P1) < laag) {
        tijd_3 = input.runningTimeMicros()
        fase = 4
        led.plot(3, 0)
    }
    if (fase == 4 && pins.analogReadPin(AnalogPin.P2) > hoog) {
        tijd_4 = input.runningTimeMicros()
        fase = 5
        led.plot(4, 0)
    }
    if (fase == 5 && pins.analogReadPin(AnalogPin.P2) < laag) {
        tijd_5 = input.runningTimeMicros()
        fase = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        serial.writeLine("" + tijd_0 + "  " + tijd_1 + "  " + tijd_2 + "  " + tijd_3 + "  " + tijd_4 + "  " + tijd_5)
    }
}
