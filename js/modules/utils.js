//возвращает целое число от beg до end
export function getRandomInt(beg, end) {
    let x = Math.random() * (end - beg + 1) + beg;
    return parseInt(x);
}

//удаляет все дочерние элементы
export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}