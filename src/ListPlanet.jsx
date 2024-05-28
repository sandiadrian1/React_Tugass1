import planet from "./DataPlanet";

const List=()=>{
    return (

        <div className="containers">
      {planet.map((planets)=>(
          
          <div className="card">
      <div key={planets.id} >
        <img src={planets.gambar} alt="" />
        <h3>{planets.name}</h3>
        <p>{planets.jarak}</p>
      </div>
      </div>
    ))}
  
    </div>
)
}

export default List;

