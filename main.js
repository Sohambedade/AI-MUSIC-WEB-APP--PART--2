song1 = "";
song2 = "";

function preload()
{
     song1 = loadSound("music.mp3");
     song2 = loadSound("music2.mp3");
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.hide();

    canvas = createCanvas(550, 500);
    canvas.center();

}
function draw(){
    image(video, 0, 0, 550, 500)
}

function play()
{
    song.play();
}
