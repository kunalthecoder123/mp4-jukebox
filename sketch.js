function preload(){
  ms= loadSound("lol.mp4")
  mbg = loadImage ("haha.jpg")
  lc = loadSound ("mow.mp4")
  tg = loadSound ("tiger.mp4")
  sk = loadSound ("smokee.mp4")
  all = loadSound ("aiw.mp4")
  su = loadSound ("sun.mp4")
  dt = loadSound ("de.mp4")
}

function setup() {
  createCanvas(400, 400);
  ks = createButton("Stop")
  kp = createButton("Behti Hawa Sa Tha Woh")
  bh = createButton ("Tiger's Theme")
  ji = createButton ('Locked up ')
  ss = createButton ("Smoke Shisha")
  aw = createButton ("All Izz Well")
  sn = createButton ("Give Me Some Sunshine")
  de = createButton ("Jaane Nahin Denge Tujhe")
  background(mbg);
  textSize(100)
  text("Song",10,height/2)
  kunal = createSlider(0,1,0.1,0.1)
  ks.mousePressed (stop)
  kp.mousePressed (wind)
  bh.mousePressed (starttiger)
  ji.mousePressed (startlocked)
  ss.mousePressed (startsmoke)
  aw.mousePressed (startwell)
  sn.mousePressed (startsun)
  de.mousePressed (startno)
}

function draw() {
  //background(0,255,0);
  ms.setVolume(kunal.value())
  lc.setVolume(kunal.value())
  tg.setVolume(kunal.value())
  sk.setVolume(kunal.value())
  all.setVolume(kunal.value())
  su.setVolume(kunal.value())
  dt.setVolume(kunal.value())
}  
  function stop(){
    ms.stop()
    tg.stop()
    all.stop()
    dt.stop()
    lc.stop()
    sk.stop()
    su.stop()
  }

function wind(){
  lc.stop()
  sk.stop()
  tg.stop()
  all.stop()
  su.stop()
  dt.stop()
  ms.play()
}

function starttiger(){
  ms.stop()
  sk.stop()
  su.stop()
  dt.stop()
  all.stop()
  lc.stop()
  tg.play()
}

function startlocked(){
  ms.stop()
  tg.stop()
  lc.stop()
  su.stop()
  dt.stop()
  all.stop()
  sk.stop()
  lc.play()
}
function startsmoke(){
  ms.stop()
  tg.stop()
  all.stop()
  su.stop()
  dt.stop()
  lc.stop()
  sk.play()
}
function startwell(){
  ms.stop()
  tg.stop()
  lc.stop()
  dt.stop()
  sk.stop()
  su.stop()
  all.play()
}
function startsun(){
   ms.stop()
  tg.stop()
  lc.stop()
  dt.stop()
  sk.stop()
  all.stop()
  su.play()
  
}
function startno(){
  ms.stop()
  tg.stop()
  lc.stop()
  su.stop()
  sk.stop()
  all.stop()
  dt.play() 
}
