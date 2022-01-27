//com this

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}


function mapComThis(arr, thisArg){ //passando array e objeto que vai ser utilizado como this
    return arr.map(function(item){ //item é o elemento do array, no caso começa com 1 e depois 2
        return item * this.value; //this vai olhar para o objeto e seu valor
            // -------- maçã ---------
            //item do array (1) x valor do objeto (2) = 2
            //item do array (2) x valor objeto (2) = 4
            // -------- laranja ---------
            //item do array (1) x valor do objeto (3) = 3
            //item do array (2) x valor objeto (3) = 6
    }, thisArg);
}
const nums = [1,2]

console.log('resultado do objeto this = maçã', mapComThis(nums, maca));
console.log('resultado do objeto this = laranja', mapComThis(nums, laranja));
                                                        //passando array e objeto nos argumentos da função

//sem this

function mapSemThis(arr){ //passando array como parametro
    return arr.map(function(item){ //retorna o map do array com função
        return item * 2;    // retorna elemento do array x 2
    });
}

const nums2 = [2,4,6,8,10];
console.log(mapSemThis(nums2));