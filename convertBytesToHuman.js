/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Округление, максимум,
 * до 2 знаков после запятой, исключая нули.
 *  Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * `convertBytesToHuman(1610612736) === '1.5 GB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа).
 * В случае передачи неподходящего аргумента,
 * функция должна вернуть false.
 */

export default function convertBytesToHuman(bytes) {
    if (typeof bytes !== 'number') {
        return false;
    }
    if (bytes < 0) {
        return false;
    }
    const kb = 1024;
    const mb = kb * 1024;
    const gb = mb * 1024;
    if (bytes < kb) {
        return `${bytes} B`;
    }
    if (bytes < mb) {
        return `${(bytes / kb).toFixed(2)} KB`;
    }
    if (bytes < gb) {
        return `${(bytes / mb).toFixed(2)} MB`;
    }
    return `${(bytes / gb).toFixed(2)} GB`;
}
