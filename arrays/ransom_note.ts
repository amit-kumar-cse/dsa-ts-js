// function for checking if a ransom note can be formed from another string
function canFormRansomNote(ransomNote: string, magazine: string): boolean {
    let ransomNoteArr = ransomNote.split("");
    let magazineArr = magazine.split("");
    let map: Map<String, number> = new Map();
    for(let char of magazineArr) {
        const freq = map.has(char) ? map.get(char) : 0;
        map.set(char, freq! + 1);
    }
    for(let char of ransomNoteArr) {
        if(map.has(char)) {
            const freq = map.get(char)!;
            if(freq === 1) {
                map.delete(char);
            } else {
                map.set(char, freq - 1);
            }
        } else {
            return false;
        }
    }
    console.log(map);
    for(let key in map) {
        if(map.get(key as string)! > 0) {
            return false;
        }
    }
    return true;
}

console.log(canFormRansomNote("a", "b"));