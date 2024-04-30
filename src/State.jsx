import City from "./City"

const State = (props) => {
  return (  
    <>
    <div>
      {props.state.name}
      {props.state.cities.map(city =>
      <City key={city} city={city} />
      )}
    </div>
    </>
  )
}

export default State