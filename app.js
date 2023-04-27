//without Debouncing
let counter = 0;
function getData() {
    console.log("getData", counter++)
}
// getData()

//with Debouncing 

function Debouncing(call, wait) {
    let timer;
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            call()
        }, wait)
    }
}
const Debounce = Debouncing(getData, 2000)
// console.log(Debounce)




