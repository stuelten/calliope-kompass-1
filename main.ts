input.onGesture(Gesture.FreeFall, function () {
    for (let index = 0; index < 50; index++) {
        for (let index = 0; index < 40; index++) {
            for (let index = 0; index < 30; index++) {
                for (let index = 0; index < 20; index++) {
                    for (let index = 0; index < 10; index++) {
                        music.playTone(988, music.beat(BeatFraction.Breve))
                    }
                }
            }
        }
    }
})
basic.setLedColor(basic.rgb(55559, 8888895, 88884262225))
basic.showIcon(IconNames.Yes)
music.play(music.stringPlayable("C C5 D B E A F G ", 100), music.PlaybackMode.UntilDone)
basic.showString("Hallo!")
basic.forever(function () {
    basic.showCompass(60)
    if (input.compassHeading() < 30 || input.compassHeading() > 330) {
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
    } else {
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
        music.setBuiltInSpeakerEnabled(true)
    }
})
