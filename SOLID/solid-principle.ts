/*
В качестве примера рассмотрен один из пунктов петода SOLID, а именно Interface Segregation Principle.
 Принцип говорит нам о том, что те классы, которые наследуются от базового класса, не должны от них зависеть, 
 если они не используют методы базового класса. 
 
 В данном случае в коде показанна работа с интерфейсом. Интерфейс Figure - общий интерфейс для всех геометрических
 фигур вне зависимости имеют они углы (прямоугольник, треугольник и т.д.) или нет (эллипс, круг и т.д.), он не зависит от
 интерфейсов, один из которых представляет интерфейс геометрических фигур с углами FigureWithCorners, а другой 
 представляет интерфейс геометрических фигур без углов FigureWithoutCorners.
*/



interface Figure {
	name: string;
	
	getName();
	getSquare();
}

interface FigureWithCorners {
	width: number;
	height: number;
	
	getPerimeter();
}

interface FigureWithoutCorners {
	bigAxis: number;
	smallAxis: number;
	
	getCircumferenceOfEllipse();
}

class Rectangle implements Figure, FigureWithCorners {
	name: string;
	width: number;
	height: number;
	
	constructor(height: number, width: number, name: string) {
		this.name = name;
		this.width  = width;
		this.height = height;
	}
	
	getName(): string {
		return this.name;
	}
	
	getSquare(): number {
		return this.width * this.height;
	}
	
	getPerimeter(): number {
		return 2 * (this.width + this.height);
	}
	
}

class Ellipse implements Figure, FigureWithoutCorners {
	name: string;
	bigAxis: number;
	smallAxis: number;
	
	constructor(bigAxis: number, smallAxis: number, name: string) {
		this.name = name;
		this.bigAxis  = bigAxis;
		this.smallAxis = smallAxis;
	}
	
	getName(): string {
		return this.name;
	}
	
	getSquare(): number {
		return 0.5 * Math.PI * this.bigAxis * this.smallAxis;
	}
	
	getCircumferenceOfEllipse(): number {
		return 4 * (Math.PI * this.bigAxis * this.smallAxis + (this.bigAxis - this.smallAxis) ** 2) / (this.bigAxis + this.smallAxis);
	}
	
}


const rectangle: Rectangle = new Rectangle(4, 10, 'Прямоугольник');
console.log('Геометрическая фигура - ' + rectangle.getName());
console.log('Площадь прямоугольника - ' + rectangle.getSquare() + ' кв.см');
console.log('Периметр прямоугольника - ' + rectangle.getPerimeter() + ' см');

console.log('-----------------------');

const ellipse: Ellipse = new Ellipse(6, 3, 'Эллипс');
console.log('Геометрическая фигура - ' + ellipse.getName());
console.log('Площадь эллипса - ' + ellipse.getSquare() + ' кв.см');
console.log('Длина окружности эллипса - ' + ellipse.getCircumferenceOfEllipse() + ' см');

