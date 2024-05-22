let cities = ["faisalabad","lahore","karachi" ]
cities[2] = "sangla"
// proper method to enter city at the end can also add multiple cities
cities.push("islamabad")
// to enter city at the end
cities[cities.length] = "kashmir"
// for change the last city
cities[cities.length-1] = "azad kashmir"
// proper method to enter city at the start
cities.unshift("karachi","shakot")
// for removing last city 
// cities.pop()
// for removing first city
// cities.shift()
console.log(cities)
// copy of array to make changes write index between paranthesis to copy that index
// let copyOfcities = cities.slice(2,5)
// used to remove/add city write index in paranthesis  
// let copyOfcities = cities.slice()
// copyOfcities.splice(2,0, "hunza")
// console.log("copycities",copyOfcities)
var Text = document.getElementById('originalText').innerText
console.log(Text)
document.getElementById("btn1").onclick = function(){
    let lower = Text.toLowerCase(); 
    if (!lower){
        alert("enter something to get in lower case")
        return;
    }
    console.log(lower)
    // lower = lower.toLoweCase();
    document.getElementById("output-section").innerHTML = lower
}
document.getElementById("btn2").onclick = function(){
    let upper = Text.toUpperCase();
    document.getElementById("output-section").innerHTML = upper
}
// document.getElementById("btn2").onclick = function(){
//     let name = document.getElementById("input/text").value ;
//     if(name === ""){
//     // if (!name){
//         alert("please type your name")
//         return;
//     }
//     document.getElementById("output-section").innerHTML = name

// }
document.getElementById('btn3').onclick = function (){
       let lower = Text.toLowerCase(); 
       let capitalize = '<span style = "text-transform: capitalize;">'+lower + '</span>'
    //    document.getElementById('output-section').style.textTransform = "capitalize;"
    // we can also use this method
       document.getElementById("output-section").innerHTML = capitalize
}
document.getElementById('btn4').onclick = function (){
  let userText = document.getElementById('input/text').value
  if(!userText){
    alert("Enter something in input section")
    return
  }
userText = userText.toLowerCase()
document.getElementById('output-section').style.textTransform = "capitalize;"
document.getElementById('output-section').innerHTML = userText

}
document.getElementById("btn5").onclick = function (){
    document.getElementById('output-section').innerHTML = ''
     for(i=0;i<cities.length;i++ ) {
       let printcity = cities[i]
       let num = i+1
       document.getElementById('output-section').innerHTML +=  num + ')' + printcity +'<br></br>'
   }

}

document.getElementById('btn6').onclick = function(){
    let userCity = document.getElementById("input/text").value
       if(userCity.length<3){
          alert("Enter your city name correctly")
          return
        }
    let cityFirstLetter = userCity.slice(0,1).toUpperCase()
    console.log(cityFirstLetter)
    let cityAllLetters = userCity.slice(1).toLowerCase()
    console.log(cityAllLetters)
    let userCityCapitalize = cityFirstLetter + cityAllLetters
    console.log(userCityCapitalize)
    let cityFound = false
    for(i=0;i<cities.length;i++){
        if(cities[i] === userCityCapitalize){
            cityFound = true
            let html = '<span style = "color:red; font-size:20px;">"'+userCityCapitalize+'"</span>is already in list'
            document.getElementById("output-section").innerHTML = html
        }
    }
    if(cityFound === false){
        cities.push(userCityCapitalize)
        let html = '<span style = "color:green; font-size:20px;">"'+userCityCapitalize+'"</span> is added in list'
        document.getElementById("output-section").innerHTML = html
    }
    // cities.push(userCity)
    // document.getElementById(output-section).innerHTML = ''
}

document.getElementById('btn7').onclick = function(){
    let userCity = document.getElementById("input/text").value
       if(userCity.length<3){
          alert("Enter your city name correctly")
          return
        }
    let cityFirstLetter = userCity.slice(0,1).toUpperCase()
    // console.log(cityFirstLetter)
    let cityAllLetters = userCity.slice(1).toLowerCase()
    // console.log(cityAllLetters)
    let userCityCapitalize = cityFirstLetter + cityAllLetters
    // console.log(userCityCapitalize)
    let cityFound = false
    for(i=0;i<cities.length;i++){
        if(cities[i] === userCityCapitalize){
            cityFound = true
            let html = '<span style = "color:red; font-size:20px;">"'+userCityCapitalize+'"</span>is already in list'
            document.getElementById("output-section").innerHTML = html
        }
    }
    if(cityFound === false){
        cities.push(userCityCapitalize)
        let html = 'Click on<span style = "color:green; font-size:20px;">"Add your city in list"</span> to add your city in list'
        document.getElementById("output-section").innerHTML = html
    }
}

document.getElementById('btn8').onclick = function(){
    // console.log(Text)
    let originaltext = Text.toLowerCase()
    let userword = document.getElementById("input/text").value
    if(!userword){
        alert("Enter a word that you want to find")
        return
    }
    userword = userword.toLowerCase()
    let findword = originaltext.indexOf(userword)
    console.log(findword)
    if(findword !==-1){
        let html = 'your word is at index <span style = "color:green; font-size:20px;">"'+findword+'"</span>'
        document.getElementById('output-section').innerHTML = html
    } else {
        let html = ' <span style = "color:green; font-size:20px;">"'+userword+'"</span> is not found in original text'
        document.getElementById('output-section').innerHTML = html
    }
}
document.getElementById('btn9').onclick = function(){
    // let cnic = '33198-1345467-5'
    // let word = "-"
    // let replacewith = " "
    // word = new RegExp(word,'g')
    // let cinicwithout = cnic.replace(word,replacewith)
    // console.log(cinicwithout)
    let boxtext = Text.toLowerCase()
    let word = document.getElementById("input/text").value
    if(!word){
        alert("Enter the word which you want to replace")
        return
    }
    let replacewith = prompt('Enter the word with which you want to replce')
    word = word.toLowerCase()
    word = new RegExp(word,'g')
    replacewith = replacewith.toLowerCase()
    let original = boxtext.replace(word,replacewith)
    console.log(original)
    document.getElementById('output-section').innerHTML = original
}

document.getElementById("clear").onclick = function (){
    document.getElementById("output-section").innerHTML = ""
}



