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

// Canvas
class Line {
    constructor() {
        // Left
        if (Math.random() > 0.5) {
            this.x = 0;
            this.y = (Math.random() * canvas.height * 5) - canvas.height * 2.5;

            // Up
            if (Math.random() > 0.5) {
                this.dx = 1;
                this.dy = -1;
            }
            // Down
            else {
                this.dx = 1;
                this.dy = 1;
            }
        }
        // Right
        else {
            this.x = canvas.width;
            this.y = (Math.random() * canvas.height * 5) - canvas.height * 2.5;

            // Up
            if (Math.random() > 0.5) {
                this.dx = -1;
                this.dy = -1;
            }
            // Down
            else {
                this.dx = -1;
                this.dy = 1;
            }
        }

        this.dy *= 0.5;

        this.length = Math.round((Math.random() * 8) + 3) * 100;

        this.speed = 5;

        this.radius = 8;

        this.hue = Math.random() * 360;
        this.saturation = 100;
        this.lighting = 50;

        this.colour = "hsl(" + this.hue + "," + this.saturation + "%," + this.lighting + "%)";
    }

    draw() {
        c.lineWidth = this.radius;
        c.strokeStyle = this.colour;
        c.fillStyle = this.colour;

        c.beginPath();
        c.moveTo(this.x - (this.dx * this.length), this.y - (this.dy * this.length));
        c.lineTo(this.x, this.y);
        c.stroke();
    }

    update() {
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;
    }

    outOfView() {
        let start_x = this.x - (this.dx * this.length);
        let end_x = this.x;

        if (start_x < 0 && end_x < 0) {
            return true;
        }
        if (start_x > canvas.width && end_x > canvas.width) {
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

var objects = [];

window.setInterval(() => animate(), 1000 / 60);

window.setInterval(() => objects.push(new Line()), 1000 / 15);

function animate() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // call animate in a loop for each frame
    // requestAnimationFrame(animate);

    // clear the canvas
    c.clearRect(0, 0, canvas.width, canvas.height);

    // remove objects out of view
    objects = objects.filter(o => !o.outOfView())

    // draw objects
    for (var o of objects) {
        o.draw();
        o.update();
    }
}