import { useState, useEffect } from "react";
import  './App.css'
function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setIsLoading(false);
      })
      .catch(error => console.log('Error fetching countries:', error));
  }, []);

  return (
    <div>
      <h1>Country Flags</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flag-grid">
          {countries.map(country => (
            <div key={country.name.common} className="flag-item">
              <img src={country.flags.svg} alt={country.name.common} />
              <p>{country.name.common}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default App
