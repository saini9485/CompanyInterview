// Without Throatling...
//  let counter = 0;
// function getData (){
//     console.log("Clicked"+counter++)
// }
// getData()


//With Throatling....

const Throatling =(fn , wait)=>{
    return function (...args){
Document.getElementById("myId").disable = true;
setTimeout(()=>{
    fn()
},wait)
    }
}

const MyFun = Throatling(()=>{
 Document.getElementById("myId").disable = false; 
 console.log("User Clicked")
},5000)