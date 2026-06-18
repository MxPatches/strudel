
// Inspired by the beginning of https://www.youtube.com/watch?v=J-E-mhjCVDE
// But unlike backlogs_beat.js, this is its own thing

let percussion_set = "RolandTR808"

setCpm(120/3)

$: note("<4 5 4 3 4 3>/2").sound("triangle").scale("F1:minor")

$: s("sawtooth").struct("x [- x] [- x] [x -] [x -] [x -]")
.pan("[.4 .6]!2 .6*2").velocity(rand.range(.9,1)).rib(0, 2)
.adsr(".01:.1:.5:.1").lpf(slider(800,0,5000,100)).hpf(slider(100,0,5000,100)).pdecay(.3)
.distort("2:.2").room(2).gain(1.4).orbit(1)
._scope()

$: s("bd:3!3").bank(percussion_set).speed("1, 1.2").orbit(2)
._scope()

$: s("[hh - hh hh]!2 [hh hh]").bank(percussion_set).velocity(rand.range(.6, 1)).rib(0, 2).room(.2).orbit(3)
._punchcard()

$: s("oh:3").bank(percussion_set).euclid("5",12).decay(.1).crush(6).velocity(rand.range(.9,1)).rib(0,2).gain(0.6).orbit(4)
._punchcard()
