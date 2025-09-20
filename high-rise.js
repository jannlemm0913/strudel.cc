setcpm(80)

/*
a towering monument
dedicated to mammon
built on fear and distress
crushed lives beneath its fundament

agonizing display
no joy and no empathy
carry bricks for apocalypse
to extend the high-rise
*/

let vocals = note(`<
[- 1 1 1*2 1*2 1@2  -]@8
[- - - 1*2 1 1*3 1@2]@8
[- 1*2 1 1*2 1@2  - -]@8
[- 1 1@2 1*2 1*3 1@2]@8
[-]@8
[- 1*2 1 1*2 1@2 - -]@8
[- [- 1] 1 1*2 1*2 1 - -]@8
[- 1*2 1 1*2 1*2 1@2 -]@8
[- 1*2 1 1*2 1@4]@8
[-]@8
>`).sound("gm_whistle").transpose(44).dec(1.5).lpf(700).distort(1.4).vib("32:4").fm("8")._scope()


let sc = "C:minor"
let thechords = x=>x.scale(sc)

let sc2 = "C:minor"
let chords2 = x=>x.scale(sc2)

let bassnotes = n("[0 1 0 [2 [9]*4]]/8").apply(thechords).transpose("-24").sound("gm_distortion_guitar").lpf(1400).gain(.7)

let guitarnotes = n("[0 1 2 3 4 5 6 7]/8").apply(chords2).transpose("-20").sound("gm_overdriven_guitar").lpf(300).gain(.7)
  .vib("4").fm("<0 32>")

let doublebass = s("[bd:2!8]").bank("yamaharm50").gain(.6)
let highhat = s("[oh:4 - - -]/2").bank("yamaharm50")
let drums = s("[mt mt mt mt rd:1 [rd:6]*2 lt [rd]*2]/4").bank("yamaharm50").gain("<.5 .3 .3 .5>")


//$main: stack(highhat, bassnotes, vocals)._pianoroll()
//$main: stack(highhat, vocals)._pianoroll()
$main: stack(highhat, bassnotes, doublebass, drums, vocals)._pianoroll()
