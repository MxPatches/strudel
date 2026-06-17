
// Attempt at a beat similar to the beginning of https://www.youtube.com/watch?v=J-E-mhjCVDE
// Didn't know how to make it any good from here

samples('https://raw.githubusercontent.com/MxPatches/strudel/master/samples/strudel-samples.json')
soundAlias('backrooms_ambience', 'ba')
setcpm(120/3)
$: s("ba [- ba] [- ba] [ba -] [ba -] [ba -]").speed("1").begin(0.1).clip(.9).pan("[.1 .9]*2 [.9]*2").gain(3).lpf(2400).decay(.3)
$: s("ba").speed(.3).clip(1)
$: s("bd bd bd bd").bank("RolandTR909").speed("[.4 [.4,.4]]*2").hpf(200).gain("[1 [1,.1]]*2").room(.5)
