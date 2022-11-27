function getFibonacci() {
    let currentNum = 1;
    let nextNum = 0;
    let startNum = 0;

    return {
        nextResult: function result(){
            if( startNum === 0){
                startNum++;
                return {value: nextNum, done: false};
            }
            [currentNum, nextNum] = [nextNum, nextNum + currentNum];
            return {value: nextNum, done: false};
        }, 
    };
}
