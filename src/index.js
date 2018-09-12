module.exports = function solveEquation(equation) {
    let tempArray = equation.split(' ');
    let a = Number(tempArray[0]);
    let b = Number(tempArray[3] + tempArray[4]);
    let c = Number(tempArray[7] + tempArray[8]);
    let discriminant = Math.pow(b,2) - 4 * a * c;
    let firstRoot, secondRoot;
    if (discriminant > 0){
        firstRoot = Math.round((-1) * b + Math.sqrt(discriminant)) / (2 * a);
        secondRoot = Math.round((-1) * b - Math.sqrt(discriminant)) / (2 * a);
    } else if (discriminant == 0){
        firstRoot = secondRoot = Math.round((-1) * b / (2 * a));
    }
    return [firstRoot, secondRoot].sort((a,b) => a - b);
}