/*
  1. В функцию arraySorting() приходит строка чисел с разделительными запятыми.
     Преобразуйте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами.
*/
export function arraySorting(str) {
    if (!str) return '';
    return str
        .split(',')
        .map((item) => Number(item.trim()))
        .sort((a, b) => a - b)
        .join(',');
}

/*
  2. В функцию arrayFiltering() приходит массив целых чисел.
     Преобразуйте массив так, чтобы элементы больше 100 были удалены, и верните результат.
*/
export function arrayFiltering(arr) {
    return arr.filter((num) => num <= 100);
}

/*
  3. В функцию arrayPushing() приходят два массива по 5 элементов.
     Верните третий массив из 10 элементов с чередующимися значениями из обоих массивов.
*/
export function arrayPushing(arr1, arr2) {
    const result = [];
    for (let i = 0; i < 5; i++) {
        result.push(arr1[i], arr2[i]);
    }
    return result;
}
