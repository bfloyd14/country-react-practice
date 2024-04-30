import State from "./State"

const Country = (props) => {
  return ( 
    <>
    <div>
      {props.country.name}
      {props.country.states.map(state =>
        <State key={state.name} state={state}/>
      )}
    </div>
    </>
  )
}

export default Country