class Passenger{
    constructor(firstName, lastName, id, dateOfBirth, age, departingCity, arrivingCity, departingTime, arrivalTime, totalTime, bags, mealType, legRoom, windowSeat, headphones, extraFood){
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
        this.dateOfBirth = dateOfBirth
        this.age = age
        this.departingCity = departingCity
        this.arrivingCity = arrivingCity
        this.departingTime = departingTime
        this.arrivalTime = arrivalTime
        this.totalTime = totalTime
        this.bags = bags
        this.mealType = mealType
        this.legRoom = legRoom
        this.windowSeat = windowSeat
        this.headphones = headphones
        this.extraFood = extraFood
    }
}

let passengerList = []
let passengerID = 1001

function createPassenger(){
    // Getting the info
    let firstName = document.getElementById("firstNameBox").value
    let lastName = document.getElementById("lastNameBox").value
    let id = passengerID
    let dateOfBirth = document.getElementById("birthDate").value

    let date1 = new Date()
    let date2 = new Date(dateOfBirth)

    let age = Math.floor((date1 - date2)/(1000 * 60 * 60 * 24 * 365.25))
    let departingCity = document.getElementById("departFlight").value
    let arrivingCity = document.getElementById("arrivalFlight").value

    let date3 = new Date(document.getElementById("leaveDate").value)
    let date4 = new Date(document.getElementById("arriveDate").value)

    let departingTime = document.getElementById("leaveDate").value
    let arrivalTime = document.getElementById("arriveDate").value
    let totalTime = Math.floor((date4 - date3)/(1000 * 60 * 60 * 24))
    let bags = Math.abs(document.getElementById("bagAmount").value)

    let mealType;
    if(document.getElementById("chickenFood").checked){
        mealType = "Chicken Dinner"
    }else if(document.getElementById("fishFood").checked){
        mealType = "Fish Dinner"
    }else{
        mealType = "Veggie Dinner"
    }

    let legRoom = false;
    let windowSeat = false;
    let headphones = false;
    let extraFood = false;
    if(document.getElementById("legRoom").checked){
        legRoom = true 
    }else{
        legRoom = false
    }

    if(document.getElementById("seatWindow").checked){
        windowSeat = true 
    }else{
        windowSeat = false
    }

    if(document.getElementById("headphones").checked){
        headphones = true 
    }else{
        headphones = false
    }

    if(document.getElementById("extraFood").checked){
        extraFood = true 
    }else{
        extraFood = false
    }

    //Pushing the info
    let temp = new Passenger(firstName, lastName, id, dateOfBirth, age, departingCity, arrivingCity, departingTime, arrivalTime, totalTime, bags, mealType, legRoom, windowSeat, headphones, extraFood)
    passengerList.push(temp)
    
    console.log(passengerList)
    passengerID++
}