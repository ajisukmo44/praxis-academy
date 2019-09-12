function sum(num) {
    if (num === 0) {
        return 0;
    } else {
        return num + sum(--num)
    }
}

sum(4);