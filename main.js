let Rectangle = function (x, y, height, width) {
    this.height = height;
    this.width = width;
    this.getArea = function () {
        let area = height * width;
        return area;
    };
    this.getPerimeter = function () {
        let perimeter = (height + width) * 2;
        return perimeter;
    };
    this.creatRectangle = function () {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.rect(x, y, height, width);
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.fillStyle = "blue";
        ctx.fill();
    }
};
let rectangle = new Rectangle(30, 150, 150, 250);
rectangle.creatRectangle();
