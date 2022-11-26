function getNumberRadix (number, radix){
    if ( +number >= 0  && radix >= 2 && radix <= 16){
         return (number).toString(radix);
    }
    throw "Функция getNumberRadix  была вызвана с некорректными параметрами";
}
