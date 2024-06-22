var Rectangle = /** @class */ (function () {
    function Rectangle(height, width, name) {
        this.name = name;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getName = function () {
        return this.name;
    };
    Rectangle.prototype.getSquare = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var Ellipse = /** @class */ (function () {
    function Ellipse(bigAxis, smallAxis, name) {
        this.name = name;
        this.bigAxis = bigAxis;
        this.smallAxis = smallAxis;
    }
    Ellipse.prototype.getName = function () {
        return this.name;
    };
    Ellipse.prototype.getSquare = function () {
        return 0.5 * Math.PI * this.bigAxis * this.smallAxis;
    };
    Ellipse.prototype.getCircumferenceOfEllipse = function () {
        return 4 * (Math.PI * this.bigAxis * this.smallAxis + Math.pow((this.bigAxis - this.smallAxis), 2)) / (this.bigAxis + this.smallAxis);
    };
    return Ellipse;
}());
var rectangle = new Rectangle(4, 10, 'Прямоугольник');
console.log('Геометрическая фигура - ' + rectangle.getName());
console.log('Площадь прямоугольника - ' + rectangle.getSquare() + ' кв.см');
console.log('Периметр прямоугольника - ' + rectangle.getPerimeter() + ' см');
console.log('-----------------------');
var ellipse = new Ellipse(6, 3, 'Эллипс');
console.log('Геометрическая фигура - ' + ellipse.getName());
console.log('Площадь эллипса - ' + ellipse.getSquare() + ' кв.см');
console.log('Длина окружности эллипса - ' + ellipse.getCircumferenceOfEllipse() + ' см');
