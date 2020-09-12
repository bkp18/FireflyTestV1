basic.forever(function () {
    basic.showNumber(2)
    Firefly.setDC(Firefly.DCPinValues.dcmotor4, Firefly.DCDirectionValues.forward, 84)
    basic.pause(1000)
    Firefly.setDC(Firefly.DCPinValues.dcmotor4, Firefly.DCDirectionValues.forward, 0)
    basic.pause(1000)
})
