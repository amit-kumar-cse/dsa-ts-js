const inc = (n: number) => {
    if(n===0) {
        return;
    }
    inc(n-1);
    // console.log(n);
    process.stdout.write(n + ' ');
}

export  { inc };

inc(10);