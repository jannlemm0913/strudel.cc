setcpm(115)

let leadguitar = n("[5 5 4 <4 3> 5 6 7 5 2 8]/10").transpose(-16).sound("gm_distortion_guitar").gain(.4)

// rolling hertas
let doublebass = s(`<
  [bd*2 bd!6]@7
  [bd*2 bd!6]@7
  [bd*2 bd!4]@5
  [bd*2 bd!2]@3
  [bd*2 bd!4]@5
  [bd*2 bd!2]@3
  [-]@2
  >*4
  `).bank("yamaharx21")

let highhat = s("[hh - - -]").bank("yamaharm50")
let hightom = s("[- - ht -]/4").bank("yamaharx21")

let sc = "<E:minor D:minor C:minor>/16"
let thechords = x=>x.scale(sc)

let bassnotes = n("[5!8]/8").ply(4).dur(0.3).apply(thechords).transpose("<-24!5 -23 -22 -23>").sound("gm_distortion_guitar").lpf(2000).gain(.7)

//$main: stack(leadguitar, doublebass, highhat, hightom, bassnotes)._pianoroll()
$main: stack(doublebass, highhat, hightom, bassnotes)._pianoroll()

//all(pianoroll)
