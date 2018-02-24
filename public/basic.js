var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

// create a new Sprite from an image path
var bunny = PIXI.Sprite.fromImage('required/assets/basics/bunny.png')
var lapin = PIXI.Sprite.fromImage('required/assets/basics/bunny.png')

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

lapin.scale = new PIXI.Point(2,2)

app.stage.addChild(bunny);
app.stage.addChild(lapin)

const vitesse = 4

// Listen for animate update
app.ticker.add(function(delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    bunny.rotation += 0.1 * delta;
bunny.x = bunny.x + 1
bunny.y = bunny.y-1


lapin.x += vitesse
lapin.y += vitesse

if (lapin.x >= app.screen.width){
    lapin.x = 0
}
if (lapin.y >= app.screen.height){
    lapin.y = 0
}

});
