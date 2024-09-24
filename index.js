
let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let Country = document.querySelector("#country")
let Score = document.querySelector("#score")
let btn = document.querySelector("button")
let Players = document.querySelector(".Players")


let sortArray =[]


btn.addEventListener("click" , (e)=>{
    e.preventDefault()
     let player = {
        id:sortArray.length+1,
        firstName : firstName.value,
        lastName : lastName.value,
        country:country.value,
        score:score.value
     }
     sortArray.push(player)
     sorting()
     print()
     
})



function print (){
    Players.innerHTML=""
    sortArray.forEach((player,index)=>{
        
        let playersDiv = document.createElement("div")
        playersDiv.classList=("spandiv")
        let sNo = document.createElement("p")
        let fullName = document.createElement("p")
        let country = document.createElement("p")
        let score = document.createElement("p")

        sNo.innerHTML= index+1
         fullName.innerHTML=player.firstName+" " + player.lastName
        //  console.log(fullName.innerHTML);
         
          country.innerHTML=player.country
          score.innerHTML=Number(player.score)
           


          
          let delBtn = document.createElement("button")
          delBtn.innerHTML=" D "
         
             delBtn.addEventListener("click" , function(id){
               sortArray=sortArray.filter((p)=> p.id !== player.id)
              sorting()
            print()
          })


          let plusFive = document.createElement("button")
          plusFive.innerHTML=" + 5 "

          plusFive.addEventListener("click" , function(){
              player.score=Number(player.score)+Number(5)
              sorting()
              print()
          })

          let subFive = document.createElement("button")
          subFive.innerHTML=" - 5 "

          subFive.addEventListener("click" , function(){
            player.score=Number(player.score)-Number(5)
            sorting()
              print()
          })
          
          playersDiv.append(sNo , fullName , country , score , delBtn , plusFive ,subFive)
          Players.append(playersDiv)
    })
}


  function sorting (){
   return sortArray.sort((a,b) => Number(b.score) - Number(a.score))           // console.log(sortArray);

  }

