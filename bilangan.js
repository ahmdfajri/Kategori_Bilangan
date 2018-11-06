function bilangan(x) {
    sifat = x
    if (x % 2 == 0 && x >= 0 && x > 0) {
        sifat = ['bulat', 'cacah', 'asli', 'genap']
    }
    else if (x == 1) {
    sifat = ['bulat', 'cacah', 'asli', 'ganjil']
    }
    else if (x % 2 != 0 && x >= 0 && x > 0) {
        sifat = ['bulat', 'cacah', 'asli', 'ganjil', 'prima']
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
    else if (x == 2) {
        sifat = ['bulat', 'cacah', 'asli', 'genap', 'prima']
    }
    return sifat
}
console.log(bilangan(1))