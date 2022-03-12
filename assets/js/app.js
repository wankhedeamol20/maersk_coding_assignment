let input = [1,2,3,4,5,6,7,8,9];

const numbers = document.querySelector('.number-container');


// Shuffle the input array
const shuffle = () => {
    for (let i = input.length - 1; i > 0; i--) {

        // Generate random number
        let j = Math.floor(Math.random() * (i + 1));
        let temp = input[i];
        input[i] = input[j];
        input[j] = temp;
       
    }
    rearrange();
    console.log('shufflenumbers', input);
}



// Sort the input array
const sortArray = () => {
    input.sort();
    rearrange();
}

// rearrang the boxes
const rearrange = () => {
    numbers.innerHTML = '';
    input.map((el)=>{
        numbers.innerHTML += `<div class="box">${el}</div>`;
    });
}

shuffle();