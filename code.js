function fib(n) {
    if (n == 0) {
        return [0];
    } else if (n == 1) {
        return [0, 1];
    }
    let recursiveArr = [0, 1];

    function rest(pointA, pointB) {
        let nextFib = pointA + pointB;
        recursiveArr.push(nextFib);
        if (recursiveArr.length < n + 1) {
            rest(pointB, nextFib);
        }
    }

    rest(0, 1);
    return recursiveArr;
}
