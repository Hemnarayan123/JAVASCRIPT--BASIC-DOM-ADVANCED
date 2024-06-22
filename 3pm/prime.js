var practice = (primeNumber) => {
    for (var val = 1; val <= primeNumber; val++) {

        for (var i = 1; i <= val; i++) {
            if (val % i === 0) {
                count++;
            }
        }

        if (count === 2) {
            console.log(val + " is a prime number");
        } else {
            console.log(val + " is not a prime number");
        }
    }
};

practice(10);
