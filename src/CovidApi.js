import React, {useState} from "react";
import up from './red-up-arrow.png';
import down from './arrow-down.png';

export default function CovidApi(){
    const [covid, setCovid] = useState (null)

    React.useEffect(() => {
        fetch('https://api.covid19api.com/summary')
        .then((response) => response.json())
        .then((data) => setCovid(data))
        .catch((error) => console.log(error))
    })

    let countryA, newConfirmedA, newDeathsA, differenceA, countries, countryB, newConfirmedB,
        newDeathsB, differenceB, dummy, dummy2
    if(covid){
        dummy = covid.Countries[0]
        dummy2 = covid.Countries[8]
        countryA = dummy.Country
        newConfirmedA = dummy.NewConfirmed
        newDeathsA = dummy.NewDeaths
        differenceA = newConfirmedA - newDeathsA

        countryB = dummy2.Country
        newConfirmedB = dummy2.NewConfirmed
        newDeathsB = dummy2.NewDeaths
        differenceB = newConfirmedB - newDeathsB

        countries =                      
        Object.values(covid.Countries).map((value)=>
            <tr>
                <td>{(value.Country)} </td>
                <td>{(value.TotalConfirmed)}</td>
            </tr>)
            
    }

    else{
        countryA = ''
        newConfirmedA = ''
        newDeathsA = ''
        differenceA = ''

        countryB = ''
        newConfirmedB = ''
        newDeathsB = ''
        differenceB = ''

        countries = ''
        dummy = ''
        dummy2 = ''
    }

    let arrow
    if(differenceA >= 5 ){
        arrow = <img src={up} alt={"arrow-up"} width={50}/>
    }

    else{
        arrow = <img src={down} alt={"arrow-down"} width={50}/>
    }

    if(differenceB >= 5){
        arrow = <img src={up} alt={"arrow-up"} width={50}/>
    }

    else{
        arrow = <img src={down} alt={"arrow-down"} width={50}/>
    }



    return(
        <div style={{width: "70%", margin: "20px auto"}}>
            {/* {JSON.stringify(covid)} */}
            <table style={{border: '1px solid black'}}>
                <tr>
                    <th>Country</th>
                    <th>New Cases</th>
                    <th>New Deaths</th>
                    <th>Difference</th>
                    <th></th>
                </tr>

                <tr>
                    <td>{countryA}</td>
                    <td>{newConfirmedA}</td>
                    <td>{newDeathsA}</td>
                    <td>{differenceA}</td>
                    <td>{arrow}</td>
                </tr>

                <tr>
                    <td>{countryB}</td>
                    <td>{newConfirmedB}</td>
                    <td>{newDeathsB}</td>
                    <td>{differenceB}</td>
                    <td>{arrow}</td>
                </tr>

            </table>

            <table>
                        <tr>
                            <th>Country</th>
                            <th>Total Confirmed cases</th>
                        </tr>
                        {countries}
            </table>
        </div>
    )
}