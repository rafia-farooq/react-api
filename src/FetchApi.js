import React from "react";
import { useState } from "react";


export default function FetchApi(){
    const[data, setData] = useState(null)

    React.useEffect(
        () => fetch("https://restcountries.eu/rest/v2/all")
        .then((response)=>response.json())
        .then((json)=>setData(json))
        .catch((error)=>console.log(error))
    )

    let countryNames, countryPk, countryFlag, list, dropdown

    if (data) {
        countryNames = <p>Name: {JSON.stringify(data[169].name)}</p>
        countryPk = <p>Information: <br/>{JSON.stringify(data[169])}</p>
        countryFlag = <img src={"https://restcountries.eu/data/pak.svg"} alt={"abc"} width={100}/>
        list =
        <ul>
            {data.map((value, key)=>(
                <li>
                    <img src={value.flag} alt={value.name} width={100}/>
                    {value.name}
                </li>
            ))}
        </ul>

        dropdown = 
        <select>
            <option> Choose a Country</option>

            {data.map((value, key)=>(
                <option>{value.translations.fa}</option>
            ))}
            
        </select>
    } else {
        countryNames = ''
        countryPk = ''
        countryFlag = ''
        list = ''
        dropdown = ''
    }

    return(
        <>
        <div style={{margin: "20px"}}>
            {countryNames}
            <hr/>
            {countryFlag}
            <hr/>
            {countryPk}
            <hr/>            
            {dropdown}
            {list}
            
        </div>
        
        
        </>
    )
}