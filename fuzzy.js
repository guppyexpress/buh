var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var particles = [];
var num_particles = 7;//*MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM* MICROWAVE TIME

//Helps prevent colors from being too high or too low
function GetRandomColor() {
    var r = 0, g = 0, b = 0;
    while (r > 100 && g > 100 && b > 100)
    {
        r = Math.floor(0);
        g = Math.floor(0);
        b = Math.floor(0);
    }

    return "rgb(" + r + "," + g + ","  + b + ")";
}
//Particle object with random starting position, velocity and color
var Particle = function () {
    this.x = canvas.width * Math.random();
    this.y = canvas.height * Math.random();
    this.vx = 5 * Math.random() - 10;//x axis
    this.vy = 6 * Math.random() - 12;//y axis
    this.Color = GetRandomColor();
}
//Ading two methods
Particle.prototype.Draw = function (ctx) {
    ctx.fillStyle = this.Color;
    //change fuzzy boi size
    ctx.fillRect(this.x, this.y, 70, 70);
}
Particle.prototype.Update = function () {
    this.x += this.vx;
    this.y += this.vy;
 
    if (this.x<0 || this.x > canvas.width)
        this.vx = -this.vx;
 
    if (this.y < 0 || this.y > canvas.height)
        this.vy = -this.vy;
}
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < num_particles; i++) {
        particles[i].Update();
        particles[i].Draw(ctx);
    }
    requestAnimationFrame(loop);
}
//Create particles
for (var i = 0; i < num_particles; i++)
    particles.push(new Particle());
loop();


/*
 * A simple program that fills the canvas with a random color on 
 * left mouse click.
 */


function App(){
    /*
     * Create our canvas and context and add an event listener.  
     */
    var canvas = document.getElementById("topCanvas");
    this.context = canvas.getContext('2d');
    document.addEventListener('mousedown', this.onClick.bind(this), false);
}

App.prototype.onClick = function(event){
    /*
     * If the event is a left mouse click, randomly generate a new color
     * and call the fill() method.
     */
    if(event.which === 1){
        var color = [];
        for(var i=0; i<3; i++){
            color.push(Math.floor(Math.random()*256));
        }
        this.fill('rgb('+color.join(',')+')');
    }
};

App.prototype.fill = function(color){
    /*
     * Fill the canvas with the new color.
     */
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.context.canvas.width,
                          this.context.canvas.height);
};


function run(){
    new App();
}

window.onload = run;
run();
