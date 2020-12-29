basic.showIcon(IconNames.Heart)
mbit_小車類.Music_Car(mbit_小車類.enMusic.dadadum)
basic.forever(function () {
    mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 150)
    mbit_小車類.RGB_Car_Big(randint(0, 255), randint(0, 255), randint(0, 255))
    if (mbit_感測器類.Ultrasonic(DigitalPin.P14, DigitalPin.P15) < 15) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Back, 100)
        mbit_小車類.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.showIcon(IconNames.Sword)
        basic.pause(1000)
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Left, 100)
        mbit_小車類.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Violet))
        basic.showIcon(IconNames.Giraffe)
        basic.pause(1000)
    }
})
