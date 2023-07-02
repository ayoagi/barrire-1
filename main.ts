basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Up)
        basic.pause(4500)
        Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
    }
})
