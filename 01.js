// take an arrayu
//take number of rotations , each rotation should shif one element to left

// create a function - takes 2 arguments rotleft(a,d) -  a - lenght of array  d-number of rotatio

//loop through it
//shift and push element 

function rotLeft(a, d) {
    let lista = a;
    for (let i = 0; i < d; i++) {
        let removed = lista.shift([i]);
        let replaced = lista.push(removed);
    }
    return lista
};

rotLeft([1, 2, 3, 4, 5], 5)
