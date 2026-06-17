
// CRON CONFLICT
// by Mx.Patches
// version 1.1.1

const volume = slider(1,0,2,0.05)

setCpm(160/4)

const ambience = note("f1").seg(16).sound("supersaw").slow(4)
  .adsr("1:1:1:1").gain(perlin.range(0.2, 0.5)).room(2).roomsize(6)
  .postgain(volume)._scope()

const hihats = n(irand(8)).struct("x*4 x*2 x*4 x*2").sound("hihat")
  .rib(6, 2).gain(3).room(.5).lpf(3000)
  .postgain(volume).color("green")._scope()

const bass = note("<0 1 -1 2>!8".add("[0 5]*4"))
  .sound("sawtooth").scale("C:minor").octave(-2)
  .lpf(600).adsr(".01:.05:.5:.0125").crush(8)
  .postgain(volume).color("yellow")._punchcard()

const drums = s("sd bd sd bd").ply("[1|1|2]*4").bank("RolandTR909")
  .lpf(400).gain(0.4).room(1).roomsize(1)
  .postgain(volume).color("lime")._scope()

const first_notes = "0 1 2 <[1 2] [1 0]> 1 2 0 <[1 2] [2 1]>".slow(4)
const main_notes = "0 1 2 <[1 2] [1 0]> 1 2 0 <[1 2] [2 1]>".add("<[0,3,7] [0,4,7]>").slow(4)
const final_notes = "0 [1 2] [3 - 5@2] [4 - 4 3] [1 2] 0@11".add("[0,3,7]").slow(8)
function guitar(selected_notes){
  return note(selected_notes).sound("gm_distortion_guitar:3").scale("F2:minor")
    .gain(rand.range(.6,1)).color("cyan").hpf(300).lpf(2500)
    .postgain(volume)._punchcard()
}

track: stack(
  ambience.mask(            "<[x x] x x x [x x] x [x x] x>/8"),
  bass.mask(                "<[- -] x x x [x x] - [- -] ->/8"),
  drums.mask(               "<[- -] - x x [- -] x [- -] ->/8"),
  hihats.mask(              "<[- x] x x x [x -] x [x -] ->/8"),
  guitar(first_notes).mask( "<[- -] - x - [- -] - [- -] ->/8"),
  guitar(main_notes).mask(  "<[- -] - - x [x x] x [- -] ->/8"),
  guitar(final_notes).mask( "<[- -] - - - [- -] - [x -] ->/8")
)
