import Country from './Country'
import './App.css'

function App() {
  const countryData = [
    {
      name: 'Mexico',
      states: [
        {
          name: 'Jalisco',
          cities: ['Guadalajara', 'Puerto Vallarta', 'Zapopan']
        },
        {
          name: 'Nuevo León',
          cities: ['Monterrey', 'San Pedro Garza García', 'Santa Catarina']
        },
        {
          name: 'Quintana Roo',
          cities: ['Cancún', 'Playa del Carmen', 'Tulum']
        },
        {
          name: 'Puebla',
          cities: ['Puebla City', 'Cholula', 'Tehuacán']
        },
        {
          name: 'Oaxaca',
          cities: ['Oaxaca City', 'Puerto Escondido', 'Huatulco']
        },
      ]
    },
    {
      name: 'USA',
      states: [
        {
          name: 'California',
          cities: ['Los Angeles', 'San Francisco', 'San Diego']
        },
        {
          name: 'New York',
          cities: ['New York City', 'Buffalo', 'Rochester']
        },
        {
          name: 'Texas',
          cities: ['Houston', 'Austin', 'Dallas']
        },
        {
          name: 'Kansas',
          cities: ['Manhattan', 'Topeka', 'Wichita']
        },
        {
          name: 'Illinois',
          cities: ['Chicago', 'Springfield', 'Aurora']
        },
      ]
    },
  ]
  return (
    <>
      <div>
        {countryData.map(country =>
        <Country key={country.name} country={country} />
      )}
      </div>
    </>
  )
}

export default App
