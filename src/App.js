import Covid from "./CovidApi.js";
import Countries from "./FetchApi.js";
import Weather from "./WeatherApi";

function App() {
  return (
    <>
    <h2>Today's Weather</h2>
    <Weather></Weather>

    <h2>Covid Update</h2>
    <Covid></Covid>
    
    <h2>Countries Information</h2>
    <Countries></Countries>

    </>
  );
}

export default App;
