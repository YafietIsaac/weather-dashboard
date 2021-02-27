let index = 0




document.getElementById('searchBtn').addEventListener('click', event => {
  event.preventDefault()
  let cityName = document.getElementById('city').value
  index++
  let today = new Date().toLocaleDateString()
  var tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString();
  let day2 = new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString();
  let day3 = new Date(new Date().setDate(new Date().getDate() + 3)).toLocaleDateString();
  let day4 = new Date(new Date().setDate(new Date().getDate() + 4)).toLocaleDateString();
  let day5 = new Date(new Date().setDate(new Date().getDate() + 5)).toLocaleDateString();





  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=cde25f400fd71f13ed4e7af5635b553d`)
    .then(res => {
      let info = res.data
      let temp = info.main.temp
      let speed = info.wind.speed
      let humidity = info.main.humidity
      let icon = info.weather[0].icon
      //console.log(temp)
      //console.log(speed)
      //console.log(humidity)

      document.getElementById('weatherDaily').innerHTML = `
      <h1>${cityName}, ${today}</h1>
      <p>Temperature: ${temp} °F </p>
      <p>Humidity: ${humidity}%</p>
      <p>Wind Speed: ${speed} mph</p>
      `
      localStorage.setItem(JSON.stringify(index), JSON.stringify(cityName))

      let newItemElem = document.createElement('li')
      newItemElem.textContent = cityName
      newItemElem.classList.add('list-group-item')

      document.getElementById('list').append(newItemElem)




    })
    .catch(err => console.error(err))


  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=cde25f400fd71f13ed4e7af5635b553d`)
    .then(res => {
      let info = res.data
      let day1Weather = info.list[3].main.temp
      let day2Weather = info.list[11].main.temp
      let day3Weather = info.list[19].main.temp
      let day4Weather = info.list[27].main.temp
      let day5Weather = info.list[35].main.temp
      let day1Humid = info.list[3].main.humidity
      let day2Humid = info.list[11].main.humidity
      let day3Humid = info.list[19].main.humidity
      let day4Humid = info.list[27].main.humidity
      let day5Humid = info.list[35].main.humidity
      //console.log(info)
      //console.log(day1Weather)
      //console.log(day2Humid)

      document.getElementById('day1info').innerHTML = `
      <p>${tomorrow}</p>
      <p>Temp: ${day1Weather} °F</p>
      <p>Humidity: ${day1Humid}%</p>
      `

      document.getElementById('day2info').innerHTML = `
      <p>${day2}</p>
      <p>Temp: ${day2Weather} °F</p>
      <p>Humidity: ${day2Humid}%</p>
      `
      document.getElementById('day3info').innerHTML = `
      <p>${day3}</p>
      <p>Temp: ${day3Weather} °F</p>
      <p>Humidity: ${day3Humid}%</p>
      `
      document.getElementById('day4info').innerHTML = `
      <p>${day4}</p>
      <p>Temp: ${day4Weather} °F</p>
      <p>Humidity: ${day4Humid}%</p>
      `
      document.getElementById('day5info').innerHTML = `
      <p>${day5}</p>
      <p>Temp: ${day5Weather} °F</p>
      <p>Humidity: ${day5Humid}%</p>
      `

    })
    .catch(err => console.error(err))
})
