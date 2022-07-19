"use strict"

const prices = document.querySelectorAll(".price")
const bars = document.querySelectorAll(".bar")
const days = document.querySelectorAll(".day")
const errorMessage = document.getElementById("card-content-header")

bars.forEach((bar)=>{
    bar.addEventListener("mouseenter", ()=>{
        bar.previousElementSibling.style.visibility = "visible"
    })
    bar.addEventListener("mouseleave", ()=>{
        bar.previousElementSibling.style.visibility = "hidden"
    })
})

const getData = () => {
    fetch("data.json")
        .then((response) => {
            if(!response.ok)
                throw new Error("Information not found")
            return response.json()
        })
        .then((data) => {
            for(var i = 0; i < data.length; i++) {
                prices[i].innerText = data[i].amount
                bars[i].style.height = `${data[i].amount * 3}px`
                days[i].innerText = data[i].day
            }
        }).catch((err) => errorMessage.innerText = (err))

}
getData()