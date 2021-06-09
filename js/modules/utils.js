export function getRandomInt(beg, end) {
    let x = Math.random() * (end - beg + 1) + beg;
    return parseInt(x);
}

export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export function formatMoney(str){
    if(str==='N/A'){
        return 'N/A';
    } else {
        let temp=str.split(',');
        let strNew=temp.join('');
        return parseInt(strNew.substring(1));
    }
}