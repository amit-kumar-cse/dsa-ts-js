class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

class Point1 {
    constructor(public x: number, public y: number) {}
    add(point: Point1) {
        return new Point1(this.x + point.x, this.y + point.y);
    }
    print() {
        console.log(this.x, this.y);
    }
}

let p1 = new Point1(1, 2);
p1.print();