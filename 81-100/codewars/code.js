function Point(x,y){
  this.x = x;
  this.y = y;
}

function distanceBetweenPoints(a, b) {
  // AB = √(xb - xa)2 + (yb - ya)
  let distance = Math.sqrt(Math.pow((b.x - a.x) ,2) + Math.pow((b.y - a.y), 2));
  
  return distance; // your code here
}

console.log(distanceBetweenPoints(new Point(1,6), new Point(4,2)))
console.log(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)))