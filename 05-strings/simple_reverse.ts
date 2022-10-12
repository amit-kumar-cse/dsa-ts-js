const simpleReverse = (str: string): string => {
    let l=0, r=str.length-1;
        while(l<r) {
        let temp = str[l];
        str.
        str[r] = temp;
        l++;
        r--;
    }
    return str;
}