/*
dissonant malignant voices
always present just for me
whisper sense giving me meaning
even though i cannot see

steadward guides giving me purpose
in a world that's far too bleak
dignifying my existence
without lies, without deceit

come to us they softly whisper
leave this mortal realm behind
i guess today i finally join them
apotheosis from my kind
*/
setcpm(110)

let vocals = note(`<
[-]@2
[- 1*2 1 1*3 1 1@2 -]
[- - - 1*2 1*2 1*2 1@2]
[- 1*2 1 1*3 1 1@2 -]
[- - - 1*2 1*2 1*2 1@2]
[-]
[- 1*2 1 1*3 1 1@2 -]
[- - - 1*2 1*2 1*2 1@2]
[- 1*2 1 1*3 1 1@2 -]
[- - - 1*2 1*2 1*2 1@2]
[-]@0.5
[- 1*2 1 1*3 1 1@2 -]
[- - - 1*2 1*2 1*2 1@2]
[- 1*2 1*2 1*3 1 1@2 -]
[- - 1*2 1*2 1*2 1@3]
>`).slow(8).sound("gm_whistle").transpose(46).dec(1.5).lpf(1700).vib("32:8").gain(.8).room(.1)._scope()

let sc = "B:minor"
let chords = x=>x.scale(sc)

let notes1 = n(`12? - - -`).apply(chords).vowel("a").transpose("<-14 -15>").room(1.5).echo(3, 1/4, .8)
  ._scope()
let notes2 = n(`- - 24? -`).apply(chords).lpf(700).room(1.2).echo(5, 1/6, .6)
  ._scope()

let notes3 = n(`< - 36? - 36?>`).apply(chords).lpf(700).vib("6:2").room(1.5).echo(2, 1/2, .1)
  ._scope()

let doublebass = n("<[-]!8 [3]!8 [3!8]!32>").slow(2).gain(.7)

let highhat = n("[4 -]/2").gain(.5).distort(0.4)

let bassnotes = n("<[14!15 -] [28 29*2 28 29*2 5 6*2 4 6*2]!5 [33*2 14 6*2 9*2 33*2 14 33 14]!4>").slow(4).gain("<.6 .4 .4 .6>").room(0.8).distort(1.1)

$main: stack(vocals, notes1, notes2, notes3, highhat, doublebass, bassnotes).spiral({ steady: .86 })
