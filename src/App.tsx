import { useState } from 'react'

function App() {
  const [plants, setPlants] = useState([
    { id: 1, name: 'Onion', notes: 'Planted in grow bags, before last frost'},
    { id: 2, name: 'Zinnia', notes: 'Planted in raised beds with straw mulch'},
  ])
  
  return (
    <div>
      <h1>A Garden Journal</h1>
      {plants.map(plant => (
        <div key={plant.id}>
          <h2>{plant.name}</h2>
          <p>{plant.notes}</p>
          </div>
      ))}
    </div>
  )
}

export default App