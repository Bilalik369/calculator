const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});

class Calculator {

    // function qui fait la validation de les nbrs
    validateInput(input) {
        const nbr = parseFloat(input);
        if (isNaN(nbr)) {
            throw new Error('Entrée invalide');
        }
        return nbr;
    }

    // addition
    add(a, b) {
        return a + b;
    }
    // sustraction
    subtract(a, b) {
        return a - b;
    }
    // multuplication 
    multiply(a, b) {
        return a * b;
    }
    //devision
    divide(a, b) {
        if (b === 0) {
            throw new Error('Erreur: Diviser par zéro');
        }
        return a / b;
    }
    //puissance
    power(a, b) {
        return Math.pow(a, b);
    }
     // racine caree
    sqrt(a) {
        if (a < 0) {
            throw new Error('La racine carree d un nombre negatif n existe pas');
        }
        return Math.sqrt(a);
    }
    // factoriel
    factorial(a) {
        if (a < 0) {
            throw new Error('La factorielle d un nombre négatif n existe pas');
        }
        let result = 1;
        for (let i = 1; i <= a; i++) {
            result *= i;
        }
        return result;
    }
    // cree un menu pour l'utilisateur
    menu() {
        console.log("1. Addition");
        console.log("2. Soustraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Puissance");
        console.log("6. Racine carrée");
        console.log("7. Factorielle");
        console.log("8. Quitter");
    }
}


let calculator = new Calculator();


function askForOperation() {
    calculator.menu();
    
    r1.question('Choisissez une opération (1-8): ', (choice) => {
        if (choice === '8') {
            console.log('Au revoir!');
            r1.close();
            return;
        }

        r1.question('Entrez le premier nombre: ', (input1) => {
            let num1;
            try {
                num1 = calculator.validateInput(input1); 
            } catch (error) {
                console.log(error.message);
                return askForOperation();  // إ
            }

            if (choice !== '6' && choice !== '7') {  // Pour ces opérations, nous avons besoin de deux nombres
                r1.question('Entrez le deuxième nombre: ', (input2) => {
                    let num2;
                    try {
                        num2 = calculator.validateInput(input2); 
                    } catch (error) {
                        console.log(error.message);
                        return askForOperation();
                    }
                    