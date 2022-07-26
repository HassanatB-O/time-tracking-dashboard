let activityText = document.querySelectorAll("#activity")
let timeSpan = document.getElementById("profile-bottom")
let timeChange = timeSpan.getElementsByTagName("p")
let prevTime = document.querySelectorAll("#previous-time")
let currentTime = document.querySelectorAll("#current-time")

const timeData = fetch("./data.json")
    .then(response =>{
    return response.json()
})
.then(json =>{
    return json
})

for(let j = 0; j < 3; j++){
    timeChange[j].addEventListener('click', () =>{
    
        for(let i = 0; i < 6; i++){
        const gottimeData = async () =>{
            let data = await timeData

            if(timeChange[j].innerText === 'Daily'){
                activityText[i].innerText = data[i].title
                prevTime[i].innerText = `${data[i].timeframes.daily.current}hrs`
                currentTime[i].innerText = `Last Week - ${data[i].timeframes.daily.previous}hrs`
            }
            if(timeChange[j].innerText === 'Weekly'){
                document.getElementById("weekly").style.color = "hsl(235, 45%, 61%)"
                activityText[i].innerText = data[i].title
                prevTime[i].innerText = `${data[i].timeframes.weekly.current}hrs`
                currentTime[i].innerText = `Last Week - ${data[i].timeframes.weekly.previous}hrs`
            }
            if(timeChange[j].innerText === 'Monthly'){
                activityText[i].innerText = data[i].title
                prevTime[i].innerText = `${data[i].timeframes.monthly.current}hrs`
                currentTime[i].innerText = `Last Week - ${data[i].timeframes.monthly.previous}hrs`
            }
        }
        gottimeData()
    }
})
}
