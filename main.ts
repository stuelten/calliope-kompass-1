basic.forever(function () {
    basic.showCompass(60)
    if (input.compassHeading() < 30 || input.compassHeading() > 330) {
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
    } else {
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
    }
})
