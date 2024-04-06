let input = document.querySelector('#word')
let button = document.querySelector('.okey')
let p = document.querySelector('.par')

let arr=["city","car","yellow","grey","sun"]

let random = Math.floor(Math.random()*arr.length)
let randomOk= arr[random]
console.log(randomOk);

button.addEventListener('click',function(){
    let word=input.value 
    if (word===randomOk) {

        alert('duzdur')
    }else{
            alert('sehvdir')

        }
        
    }
)
