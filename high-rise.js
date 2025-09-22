setcpm(80)

/*
a towering monument
dedicated to mammon
built on fear and distress
crushed lives beneath its fundament

agonizing display
no joy and no empathy
in the fight to survive
carry bricks for apocalypse
to extend the high-rise
*/


// gm_whistle transpose(46)
// gm_synth_choir transpose(46)
let vocals = note(`<
[-]@2
[- 1 1 1*2 1*2 1@2  -]
[- - - 1*2 1 1*3 1@2]
[- 1*2 1 1*2 1@2  - -]
[- 1 1@2 1*2 1*3 1@2]
[-]
[- 1*2 1 1*2 1@2 - -]
[- [- 1] 1 1*2 1*2 1 - -]
[- [1 1] 1 [1 1] 1 - - -]
[- 1*2 1 1*2 1*2 1@2 -]
[- 1*2 1 1*2 1@4]
>`).slow(8).sound("gm_whistle").transpose(46).dec(1.5).distort(1).lpf(1700).vib("32:8").gain(.8).room(.1)._scope()

let sc = "C:minor"
let thechords = x=>x.scale(sc)

let sc2 = "C:minor, F:minor"
let chords2 = x=>x.scale(sc2)

let bassnotes = n(`<
[1 [0*8] 1@2]
[0 2 2 0]
[0 1 0 [2 [3]*4]]!4
>`).slow(8).apply(thechords).transpose("-26").sound("gm_electric_bass_pick").room(.2)

//gm_electric_bass_pick
//gm_distortion_guitar

let guitarnotes2 = n(`<
[0]
[0 2 2 0]
[0 1 0 [2 3]]!4
>`).slow(8).apply(chords2).transpose("-22").sound("gm_overdriven_guitar").distort(0.7).gain(.3).delay(.2)
  ._scope()  
let guitarnotes = chord(`<
C2 C5 E6 E7 E9 C11 C13 C69
Cadd9 Co Ch Csus C^ C- C^7 
>`).slow(1).voicing().sound("gm_distortion_guitar")
  ._scope()
let doublebass = s(`<
[-]!8
[bd:2]!8
[bd:2!8]!32
>`).bank("yamaharm50").gain(.8)


let highhat = s("[oh:4 - - -]/2").bank("yamaharm50").gain(.7)

let drums = s(`<
[-]
[rd:6!15 -]
[mt mt*2 mt mt*2 rd:1 [rd:6]*2 lt [rd]*2]!10
>`).slow(4).bank("yamaharm50").gain("<.6 .4 .4 .6>")


//$main: stack(highhat, bassnotes, vocals)._pianoroll()
//$main: stack(highhat, bassnotes)._pianoroll()
$main: stack(highhat, bassnotes, doublebass, drums, vocals)._pianoroll()
//$main: stack(highhat, guitarnotes)._pianoroll()
