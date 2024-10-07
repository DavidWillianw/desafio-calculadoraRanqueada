let vitoria = 90;
let derrota = 3;

console.log(calculo(vitoria, derrota));


function calculo(vitoria, derrota) {
    const saldoVitorias = vitoria - derrota;

    if (saldoVitorias < 10) {
        let nivel = 'ferro';    
        let a = `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}`;
        return a;
    }
    else if(saldoVitorias > 10 && saldoVitorias < 21){
        let nivel = 'Bronze'
        let b = `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}`;
        return b;
    }
    else if(saldoVitorias > 20 && saldoVitorias < 51){
        let nivel = 'Prata'
        let c = `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}`;
        return c;
    }
    else if(saldoVitorias > 50 && saldoVitorias < 81){
        let nivel = 'Ouro';
        let d = `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}`;
        return d;
    }
    else if(saldoVitorias > 80 && saldoVitorias < 91){
        let nivel = 'Diamante'
        let e = `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}`
        return e;
    }
    else if(saldoVitorias > 90 && saldoVitorias < 101){
        let nivel = 'Lendário'
        let f = `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}`
        return f;
    }
    else if(saldoVitorias > 100){
        let nivel = 'Imortal'
        let g = `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}`
        return g
    }
    }

