import React from "react"

export default class Forecast extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            apiData: {},
            city: "",
            apiKey: "51b91d99f95843f1d1cc5913483efaa0",
        }
    }

    inputHandler = (event) => { // save city name while typing
        this.setState({ city: event.target.value });
    }

    clickHandler = () => { // fetch weather data on btn clicking
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&APPID=${this.state.apiKey}`)
        .then(res => res.json())
        .then(result => {
            this.setState({ apiData: result })
        })
    }

    render() {
        return (
            <div id="body-container" class="md:max-w-xl md:mx-auto grid grid-flow-rows gap-20 px-15 pb-80 pt-150 md:gap-20 md:px-20 md:pb-70 md:pt-120 text-center">
                <input
                    id="input-email"
                    class="transition px-20 py-10 mr-10 duration-500 ease-in-out focus:outline-none focus:ring-4 md:focus:ring-2 focus:ring-white 
                    focus:ring-opacity-30 md:text-p2-md text-primary font-medium rounded-full bg-black bg-opacity-30"
                    type="text"
                    id="city"
                    value={ this.state.city }
                    onChange={ this.inputHandler }
                    placeholder="City"
                />
                <button class="text-p2-md p-10 font-medium bg-btn-primary text-white rounded-full" onClick={this.clickHandler}>Search</button>
                { 
                    this.state.apiData.main ? (
                        <table class="bg-body text-p2-md text-white border-2 mt-10">
                            <thead>
                                <tr>
                                    <th class="bg-body border-2 p-10 text-center">Location</th>
                                    <th class="bg-body border-2 p-10 text-center">Weather</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-body">
                                    <td class="bg-body border-2 p-10 text-center">{ this.state.apiData.name }</td>
                                    <td class="bg-body border-2 p-10 text-center">{ this.state.apiData.main.temp }&deg; C</td>
                                </tr>
                            </tbody>
                        </table>
                    ) : ( 
                        <></> 
                    ) 
                }
            </div>
        )
    }
}