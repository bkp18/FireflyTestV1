let afstand = 0
basic.showLeds(`
    # . # . #
    . # . # .
    . . # . .
    . # . # .
    # . # . #
    `)
basic.forever(function () {
    afstand = Firefly.getDistance(DigitalPin.P0, DigitalPin.P1)
    serial.writeLine("" + (afstand))
    basic.pause(500)
})
