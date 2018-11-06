function bilangan(x) {
    sifat = x
    if (x % 2 == 0 && x >= 0 && x > 0) {
        sifat = ['bulat', 'cacah', 'asli', 'genap']
    }
    else if (x % 2 != 0 && x >= 0 && x > 0) {
        sifat = ['bulat', 'cacah', 'asli', 'ganjil']
    }
    else if (x == 0) {
        sifat = ['bulat', 'cacah', 'nol']
    }
    else if (x < 0 && x % 2 == 0) {
        sifat = ['negatif', 'genap', 'bulat']
    }
    else if (x < 0 && x % 2 != 0) {
        sifat = ['negatif', 'ganjil', 'bulat']
    }
    return sifat
}
console.log(bilangan(0))