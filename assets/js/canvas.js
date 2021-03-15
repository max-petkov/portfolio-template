const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let circle = [];
let square = [];




let color = '#9DAFC2'; //TRY ANOHER COLOR #FF2A19

// CIRCLE SHAPE
class Circle {
    constructor(x, y, dx, radius, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.directionX = dx;
        this.directionY = dy;

        this.maxRadius = Math.random() * (32 - 8) + 8;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.draw();
        // It will contact with the edge of the ball not with the center...
        if (this.x + this.maxRadius + 14 > canvas.width || this.x - this.maxRadius < 0) {
            this.directionX = -this.directionX;
        }

        if (this.y + this.maxRadius > canvas.height || this.y - this.maxRadius < 0) {
            this.directionY = -this.directionY;
        }
        // if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        //     this.directionX = -this.directionX;
        // }

        // if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        //     this.directionY = -this.directionY;
        // }
        if (this.radius >= this.maxRadius) {
            this.radius = this.maxRadius;
        }

        this.y += this.directionY;
        this.x += this.directionX;

        this.radius += 0.05;
    }
}

// // SQUARE SHAPE
// class Square {
//     constructor(x, y, dx, sizeW, sizeH, dy) {
//         this.x = x;
//         this.y = y;
//         this.sizeW = sizeW;
//         this.sizeH = sizeH;
//         this.directionX = dx;
//         this.directionY = dy;


//     }

//     draw() {
//         ctx.beginPath();

//         ctx.fillStyle = color;
//         ctx.rect(this.x, this.y, this.sizeW, this.sizeH);
//         // ctx.fill();
//         ctx.closePath();
//     }

//     update() {
//         this.draw();

//         if (this.y + 100 > innerHeight || this.y < 0) {
//             this.directionY = -this.directionY;
//         }

//         if (this.x + 100 > innerWidth || this.x < 0) {
//             this.directionX = -this.directionX;
//         }

//         if (this.sizeW >= 64) {
//             this.sizeW = 64;
//         }
//         if (this.sizeH >= 64) {
//             this.sizeH = 64;
//         }

//         this.sizeW += 0.5;
//         this.sizeH += 0.5;


//         this.y += this.directionY;
//         this.x += this.directionX;

//     }
// }

function init() {


    for (let i = 0; i < 32; i++) {
        let radius = Math.random() * (3 - 0) + 0;
        let maxRadius = 32;
        // It wont spawn on canvas corner... It will always spawn on the where it can bounce
        let x = Math.random() * (innerWidth - maxRadius * 2) + maxRadius;
        let y = Math.random() * (innerHeight - maxRadius * 2) + maxRadius;
        // let dx = Math.random() * (2.5 - 1.5) + 1.5;
        // let dy = Math.random() * (2.5 - 1.5) + 1.5;
        let dx = Math.random() * (0.5 - 1.0) - 0.5;
        let dy = Math.random() * (0.5 - 1.0) - 0.5;

        circle.push(new Circle(x, y, dx, radius, dy));
    }

    // for (let i = 0; i < 4; i++) {
    //     let sizeW = 0;
    //     let sizeH = 0;
    //     let perimeter = sizeW + sizeH;
    //     // It wont spawn on canvas corner... It will always spawn on the where it can bounce
    //     let x = Math.random() * (innerWidth - perimeter * 2) + perimeter;
    //     let y = Math.random() * (innerHeight - perimeter * 2) + perimeter;
    //     let dx = Math.random() * (2.5 - 1.5) + 1.5;
    //     let dy = Math.random() * (2.5 - 1.5) + 1.5;

    //     square.push(new Square(x, y, dx, sizeW, sizeH, dy));

    // }
}
init();
// console.log(square);

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circle.forEach(drawcirc => {
        drawcirc.update();
    });

    // square.forEach(drawsqr => {
    //     drawsqr.update();
    // });

}

animate();

addEventListener('resize', () => {
    circle = [];

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});
