// VueJS
var vm = new Vue({
    el: "#vue-app",
    data: function () {
        return {
            projects_url: "data/projects.json",
            projects: []
        }
    },
    created() {
        fetch(this.projects_url)
            .then(response => response.json())
            .then(json => {
                this.projects = json.projects;
            });
    }
})

function randRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Canvas
class Line {
    constructor() {
        this.velocity = 4;

        // Angle vector
        if (randomAngle) {
            this.ax = randRange(0, 1);
            this.ay = randRange(0, 1);
        }
        else {
	    this.ax = ax;
            this.ay = ay;
	    //if (Math.random() > 0.5) {
	    //    this.ax = ax;
            //    this.ay = ay;
            //}
            //else {
            //    this.ax = ay;
            //    this.ay = ax;
            //}
        }

        // Normalize
        let norm = ((this.ax ** 2) + (this.ay ** 2)) ** 0.5;
        this.ax /= norm;
        this.ay /= norm;

        // Determine starting position and direction
        if (Math.random() > 0.5) {
            // Randomly determine whether the line goes left to right or right to left
            if (Math.random() > 0.5) {
                // Left
                this.x = 0;
                this.dx = 1;
            }
            else {
                // Right
                this.x = canvas.width;
                this.dx = -1;
            }

            // Randomly determine whether the line will move up or down
            this.dy = (Math.random() > 0.5) ? -1 : 1;

            let verticalClearance = canvas.width * (this.ay / this.ax);

            // Randomly determine line starting position
            if (this.dy > 0) {
                this.y = randRange(0 - verticalClearance, canvas.height);
            }
            else {
                this.y = randRange(0, canvas.height + verticalClearance);
            }
        }
        else {
            // Randomly determine whether the line goes top to bottom or bottom to top
            if (Math.random() > 0.5) {
                // Top
                this.y = 0;
                this.dy = 1;
            }
            else {
                // Bottom
                this.y = canvas.height;
                this.dy = -1;
            }

            // Randomly determine whether the line will move left or right
            this.dx = (Math.random() > 0.5) ? -1 : 1;

            let horizontalClearance = canvas.height * (this.ax / this.ay);

            // Randomly determine line starting position
            if (this.dx > 0) {
                this.x = randRange(0 - horizontalClearance, canvas.width);
            }
            else {
                this.x = randRange(0, canvas.width + horizontalClearance);
            }
        }

        // Randomly determine line length
        this.length = randRange(300, 1100);
        // this.length = Math.round((Math.random() * 8) + 3) * 100;

        this.thickness = 8;

        // Randomly determine colour (HSL)
        this.hue = randRange(0,360);
        this.saturation = 100;
        this.lightness = 50;
        // this.saturation = Math.floor(randRange(75, 100));
        // this.lightness = Math.floor(randRange(35, 65));

        this.colour = `hsl(${this.hue},${this.saturation}%,${this.lightness}%)`;
    }

    draw() {
        c.lineWidth = this.thickness;
        c.strokeStyle = this.colour;
        c.fillStyle = this.colour;

        c.beginPath();
        c.moveTo(this.x - (this.dx * this.ax * this.length), this.y - (this.dy * this.ay * this.length));
        c.lineTo(this.x, this.y);
        c.stroke();
    }

    update() {
        this.x += (this.dx * this.ax * this.velocity);
        this.y += (this.dy * this.ay * this.velocity);

        // Bounce off walls
        // if (this.x < 0 || this.x > canvas.width) {
        //     this.dx *= -1;
        // }
        // if (this.y < 0 || this.y > canvas.height) {
        //     this.dy *= -1;
        // }
    }

    outOfView() {
        let start_x = this.x - (this.dx * this.ax * this.length);
        let end_x = this.x;

        let start_y = this.y - (this.dy * this.ay * this.length);
        let end_y = this.y;

        if (start_x < 0 && end_x < 0) {
            return true;
        }
        if (start_x > canvas.width && end_x > canvas.width) {
            return true;
        }
        if (start_y < 0 && end_y < 0) {
            return true;
        }
        if (start_y > canvas.height && end_y > canvas.height) {
            return true;
        }
        return false;
    }
}

// gets the canvas element
var canvas = document.querySelector("#canvas");

// canvas context
// used to draw on the canvas
var c = canvas.getContext("2d");

var randomAngle = false;
console.log("Try setting randomAngle = true ;)");

var ax = randRange(0.5, 1);
var ay = randRange(0.5, 1);

var objects = [];

// Update lines X times per second (1000ms / X)
window.setInterval(() => {
    // remove objects out of view
    objects = objects.filter(o => !o.outOfView())

    // update objects
    for (var o of objects) {
        o.update();
    }
    
    animate();
}, 1000 / 60);

// Add new lines X times per second (1000ms / X)
window.setInterval(() => {
    objects.push(new Line())
}, 1000 / 20);

function animate() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // call animate in a loop for each frame
    // requestAnimationFrame(animate);

    // clear the canvas
    c.clearRect(0, 0, canvas.width, canvas.height);

    // draw objects
    for (var o of objects) {
        o.draw();
    }
}
