/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first

var first = function(arr, cb) {
  var firstName = arr[0];
  cb(firstName);
}
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last

var last = function(arr, cb) {
  var lastName = arr.slice(arr.length - 1);
  cb(lastName);
}

//or 

// var last = function(arr, cb) {
//     var end = arr[(arr.length - 1)];
//     cb(end);
// }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply

var multiply = function (firstNum, secondNum, cb) {
  var ans = firstNum * secondNum;
  cb(ans);
}

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains


var contains = function(arr, str, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
          var answ = true;
          break;
        } else {
        answ = false;
      }
    }
    cb(answ);
  }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(yes){
  if(yes === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq

// var uniq = function(arr, cb) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         var found = undefined;
//         for (var y = 0; y < newArr.length; y++) {
//             if (arr[i] === newArr[y]) {
//                 found = true;
//                 break;
//             }
//         }
//         if (found !== true) {
//             newArr.push(arr[i]);
//         }
//     }
//     cb(newArr);
// }    

//or ******

var uniq = function (arr, cb) {
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j++ < arr.length; j++) {
          if (arr[i] === arr[j]) {
              arr.splice(arr[i], 1);
          }
      }
  }
  cb(arr);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
var each = function (arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    var indice = i;
    var item = arr[i];
    cb(item, indice);
  }
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

var getUserById = function (str, cb) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === str) {
      cb(users[i])
    }
  }
}

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById('16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});
