const josephusProblem: (A: number) => number = A => {
    const log = Math.floor(Math.log2(A));
    console.log("log: ", log);
    const peopleKilledBeforePerfectProblem = A - 2**log;
    console.log("peopleKilledBeforePerfectProblem: ", peopleKilledBeforePerfectProblem);
    return 2*peopleKilledBeforePerfectProblem + 1;
}

export { josephusProblem };

console.log(josephusProblem(277));