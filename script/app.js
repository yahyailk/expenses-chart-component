"use strict"

const prices = document.querySelectorAll(".price")
const bars = document.querySelectorAll(".bar")
const days = document.querySelectorAll(".day")

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
        .then((response) =>response.json())
        .then((data) => {
            console.log(data)
            for(var i = 0; i < data.length; i++) {
                prices[i].innerText = data[i].amount
                bars[i].style.height = `${data[i].amount * 3}px`
                days[i].innerText = data[i].day
            }
        })
}
getData()