

                                                             // HOMEEWORK 1

                                                             
const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'ana', age: 28 },
  ];

function finder(users) {

    let youngest = users[0];
  

    for (let i = 1; i < users.length; i++) {
        if (users[i].age < youngest.age) {
          youngest = users[i];
        }
      }
    
  

    return youngest.name ; 
  }




const homework1=document.getElementById('homework1')
const function1 = document.getElementById('function1');
const condition1 = document.getElementById('condition1');


homework1.addEventListener('click', function() {
    
    
    function1.style.display = 'block';
    function2.style.display = 'none';
        function3.style.display = 'none';
        
        condition1.style.display = 'block';
        condition2.style.display = 'none';
        condition3.style.display = 'none';
        
        
        
        
        // chemi console
        function myconsole(message) {
            let consolediv = document.querySelector('.console');
            consolediv.innerHTML += '<p>' + '> '+ message + '</p>';
        }
        
        myconsole( finder(users));
       
        
        
    //brauzeris console
    console.log( finder(users)); 


    
});    












///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


//HOMEEWORK 2





let user = {
  name: 'nika',
  age: 25,
  city: 'batumi',
  married: false
};

function creator(user) {

  const userobject = Object.entries(user);
  const user2 = userobject.map(function ([key, value]) {
    return { [key]: value };
  });

  return user2;
}
let user2 = creator(user)




                

function myconsole(message) {
  let consolediv = document.querySelector('.console');
  consolediv.innerHTML += '<p>' + '> '+ message + '</p>';
}

const homework2=document.getElementById('homework2')
const function2 = document.getElementById('function2');

homework2.addEventListener('click', function() {   
    
    function1.style.display = 'none';
    function2.style.display = 'block';
    function3.style.display = 'none';
    
    
        condition1.style.display = 'none';
        condition2.style.display = 'block';
        condition3.style.display = 'none';
     


    // chemi console
    myconsole(user===user2);
    myconsole(JSON.stringify(creator(user)));
    //brauzeris console

    console.log(user===user2);
    console.log(creator(user));

});





///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

                                                                //HOMEEWORK 3








const homework3=document.getElementById('homework3')
const functions=document.getElementById('functions')
const condition=document.getElementById('condition')

const boardgame=document.getElementById('boardgame')
const restartgame=document.getElementById('restartgame')
const winner=document.getElementById('winner')
const score1=document.getElementById('score1')
const score2=document.getElementById('score2')







homework3.addEventListener('click', function() {

    cont.style.display = 'none';
    boardgame.style.display = 'block';
    functions.style.display = 'none';
    condition.style.display = 'none';



});




back.addEventListener('click', function() {
    cont.style.display = 'block';
    functions.style.display = 'block';
    condition.style.display = 'block';
    boardgame.style.display = 'none';
    
});


start.addEventListener('click', function() {
    start.style.display = 'none';
    yourturn1.style.display = 'block';
    
});


restartgame.addEventListener('click', function() {
  start.style.display = 'block';
  yourturn1.style.display = 'block';
  dice1.style.display = 'none';
  dice2.style.display = 'none';
  yourturn1.style.display = 'none';
  yourturn2.style.display = 'none';
  winner.style.display = 'none';
    
});



roll1.addEventListener('click', function() {
    yourturn1.style.display = 'none';
    dice1.style.display = 'block';
  dice2.style.display = 'none';

 

    function randomnum() {
      return parseInt(Math.random()*6)+1
        }
 
        let result1 = randomnum()

        if (result1 === 3) {

        score1.innerText = '' + (parseInt(score1.innerText) + 1);

          winner.style.display = 'block';
          winner.innerText = 'Winner is Player 1';
          dice1.style.backgroundImage = 'url(./image/dice3.jpg)';

        }
     
        else if (result1 === 1) {
          yourturn2.style.display = ' block';
          dice1.style.backgroundImage = 'url(./image/dice1.jpg)';
      }
       else if (result1 === 2) {
        yourturn2.style.display = ' block';
          dice1.style.backgroundImage = 'url(./image/dice2.jpg)';
      } 
      else if (result1 === 4) {
        yourturn2.style.display = ' block';
          dice1.style.backgroundImage = 'url(./image/dice4.jpg)'; 
      } 
      else if (result1 === 5) {
        yourturn2.style.display = ' block';
          dice1.style.backgroundImage = 'url(./image/dice5.jpg)';
      } 
      else if (result1 === 6) {
        yourturn2.style.display = ' block';
          dice1.style.backgroundImage = 'url(./image/dice6.jpg)';
      } 




      
      else {
          yourturn2.style.display = ' block';
      }


      console.log("Player1" + " " + "-" + "  " +result1 )


});


roll2.addEventListener('click', function() {
  yourturn2.style.display = 'none';
  dice1.style.display = 'none';
  dice2.style.display = 'block';


  function randomnum() {
    return parseInt(Math.random()*6)+1
      }

      let result2 = randomnum()

      if (result2 === 3) {
      score2.innerText = '' + (parseInt(score2.innerText) + 1);

        winner.style.display = 'block';
        winner.innerText = 'Winner is Player 2';
        dice2.style.backgroundImage = 'url(./image/dice3.jpg)';
    } 
    
    
    
    else if (result2 === 1) {
      yourturn1.style.display = 'block';
      dice2.style.backgroundImage = 'url(./image/dice1.jpg)';
  } 
  else if (result2 === 2) {
      yourturn1.style.display = 'block';
      dice2.style.backgroundImage = 'url(./image/dice2.jpg)';
  }
   else if (result2 === 4) {
      yourturn1.style.display = 'block';
      dice2.style.backgroundImage = 'url(./image/dice4.jpg)';
  } 
  else if (result2 === 5) {
      yourturn1.style.display = 'block';
      dice2.style.backgroundImage = 'url(./image/dice5.jpg)';
  } 
  else if (result2 === 6) {
      yourturn1.style.display = 'block';
      dice2.style.backgroundImage = 'url(./image/dice6.jpg)';
  }
    
    

    else {
        yourturn1.style.display = 'block';
    }


      console.log("Player2" +  " " + "-" + "  " + result2 )


});















auto.addEventListener('click', function( ) {

yourturn1.style.display = 'none'
yourturn2.style.display = 'none'
winner.style.display = 'none'
dice1.style.display = 'block'
dice2.style.display = 'block'
  



function randomnum() {
  return parseInt(Math.random() * 6) + 1;
}

let result1 = 0;
let result2 = 0;

while (!(result1 === 3 && result2 !== 3) && !(result2 === 3 && result1 !== 3)) {
  result1 = randomnum();
  result2 = randomnum();

  console.log("Player1" + " " + "-" + "  " + result1);
  console.log("Player2" + " " + "-" + "  " + result2);
}

if (result1 === 3 && result2 !== 3) {
  score1.innerText = '' + (parseInt(score1.innerText) + 1);
  winner.style.display = 'block';
  winner.innerText = 'Winner is Player 1';
  dice1.style.backgroundImage = 'url(./image/dice3.jpg)';
  dice2.style.backgroundImage = 'none';
}



else if (result2 === 3 && result1 !== 3) {
  score2.innerText = '' + (parseInt(score2.innerText) + 1);
  winner.style.display = 'block';
  winner.innerText = 'Winner is Player 2';
  dice2.style.backgroundImage = 'url(./image/dice3.jpg)';
  dice1.style.backgroundImage = 'none';

}    


else if (result2 === 1) {
  yourturn1.style.display = 'block';
  dice2.style.backgroundImage = 'url(./image/dice1.jpg)';
} 
else if (result2 === 2) {
  yourturn1.style.display = 'block';
  dice2.style.backgroundImage = 'url(./image/dice2.jpg)';
}
else if (result2 === 4) {
  yourturn1.style.display = 'block';
  dice2.style.backgroundImage = 'url(./image/dice4.jpg)';
} 
else if (result2 === 5) {
  yourturn1.style.display = 'block';
  dice2.style.backgroundImage = 'url(./image/dice5.jpg)';
} 
else if (result2 === 6) {
  yourturn1.style.display = 'block';
  dice2.style.backgroundImage = 'url(./image/dice6.jpg)';
}
});
 
   

  
  










///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


















