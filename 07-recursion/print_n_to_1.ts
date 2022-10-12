const dec = (n: number) => {
    if(n===0) {
        return;
    }
    process.stdout.write(n + ' ');
    dec(n-1);    
}

export  { dec };

dec(10);