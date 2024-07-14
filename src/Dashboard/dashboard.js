function Dashboard() {
    return (
        <div id="container-clima">
            <nav>
                <input type="text" placeholder="City" id="input_city"></input>
                <div id="search" onClick={Searching}>Search</div>
            </nav>
            <div id="results">
                <div id="results_temp">
                    <p id="temp"></p>
                    <p id="city"></p>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td id="tempmax">
                                <div className="images"><img src={`${process.env.PUBLIC_URL}/Assets/Tempmax.png`} alt="Temp Max" /></div>
                                <div id="result_tempmax" className="informations"></div>
                            </td>
                            <td id="tempmin">
                                <div className="images"><img src={`${process.env.PUBLIC_URL}/Assets/Tempmin.png`} alt="Temp Min" /></div>
                                <div id="result_tempmin" className="informations"></div>
                            </td>
                        </tr>
                        <tr>
                            <td id="humidity">
                                <div className="images"><img src={`${process.env.PUBLIC_URL}/Assets/hum.png`} alt="Humidity" /></div>
                                <div id="result_humidity" className="informations"></div>
                            </td>
                            <td id="wind">
                                <div className="images"><img src={`${process.env.PUBLIC_URL}/Assets/wind.png`} alt="Temp Min" /></div>
                                <div id="result_wind" className="informations"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function addingElements(city, temp, tempmax, tempmin, humidity, wind) {

    document.querySelector("#city").innerText = city;
    document.querySelector("#temp").innerText = `${temp} °C`;
    document.querySelector("#result_tempmax").innerText = `${tempmax} °C`;
    document.querySelector("#result_tempmin").innerText = `${tempmin} °C`;
    document.querySelector("#result_humidity").innerText = `${humidity}%`;
    document.querySelector("#result_wind").innerText = `${wind} km/h`;

}

function Searching() {
    const apiKey = "4e7fc0929db66d104b70660761771e35";
    const city = document.querySelector("#input_city").value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = parseInt(data.main.temp);
            const tempmax = parseInt(data.main.temp_max);
            const tempmin = parseInt(data.main.temp_min);
            const humidity = parseInt(data.main.humidity);
            const wind = parseInt(data.wind.speed);

            addingElements(city, temp, tempmax, tempmin, humidity, wind)
        })
        .catch(error => console.error('Error:', error));
}

export default Dashboard;