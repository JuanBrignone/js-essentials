// 0 - Bajar repo, hacer hola mundo console.log
console.log("Hola mundo")

// 2 - Funciones:
// add(firstOperator, secondOperator),
function add(firstOperator, secondOperator){
    suma = firstOperator + secondOperator
    return suma;
}
console.log("suma = "+ add(1, 2));

// subtract(firstOperator, secondOperator),
function substract(firstOperator, secondOperator){
    resta = firstOperator - secondOperator
    return resta;
}
console.log("resta = "+ substract(2, 1));

// divide(firstOperator, secondOperator),
function divide(firstOperator, secondOperator){
    division = firstOperator / secondOperator
    return division;
}
console.log("division = "+ divide(4, 2));

// multiply(firstOperator, secondOperator)
function multiply(firstOperator, secondOperator){
    multiplicacion = firstOperator * secondOperator
    return multiplicacion;
}
console.log("multiplicacion = "+ multiply(2, 2));


// 3 - Funcion
// dress(temperature, isRaining)
// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶
function dress(temperature, isRaining){
    if(isRaining === true){
        console.log("llevar paraguas☂️");
    }
    if(temperature <= 10){
        console.log ("ir en auto🚗");
    }else if(temperature > 30){
        console.log("ir de short🩳");
    }else if(temperature === 30){
        console.log("usar lentes 🕶");
    }
}
dress(30, true);
dress(10, false);


// 4 - Funcion
// calculate(operation, firstOperator, secondOperator)

function calculate(operation, firstOperator, secondOperator){
    return operation(firstOperator, secondOperator)

}
console.log(calculate(add, 2, 1));

// 5 - Funcion
// eating(name, foods['🍔','🍟','🍗',])

function eating(name, foods){
    foods = ['🍔','🍟','🍗',];
    for (let i = 0; i < foods.length; i++){
        console.log(name + " esta comiendo " + foods[i]);
    }
}
eating("Juan",[]);

// 6 - Funcion
// finalCountDown(count)
function finalCountDown(count){
    for(let i = count; i >=0; i--){
        console.log(i);
    }
    console.log("Fin")
}
finalCountDown(10);

// 7 - Funcion
// getGrade(score)
// It should return the following grade according the score value.
// 0-40 => D
// 41-60 => R
// 61-74 => B
// 75-84 => BMB
// 85-96 => MB
// 97-100 => S
function getGrade(score){
    if (score >= 0 && score <= 40){
        return("D")
    }else if(score >= 41 && score <= 60){
        return("R")
    }else if(score >= 61 && score <= 74){
        return("B")
    }else if(score >= 75 && score <= 84){
        return("BMB")
    }else if(score >= 85 && score <= 96){
        return("MB")
    }else if(score >= 97 && score <= 100){
        return("S")
    }
}
console.log("Tu calificacion es: " + getGrade(61));

// 8 - Funcion
// fillCart(person, articlesCollection)
// cartArticlesCollection: [{article: '👟', amount: 1, price: 25}...])
// person: {name: 'Pepe', cart: []}
// it should modify person's cart in order to add the the new collection of articles
function fillCart(person, articlesCollection){
    
}

// 9 - Funcion
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})

// 10 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)
