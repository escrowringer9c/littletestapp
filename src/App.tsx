import { useState, useEffect } from 'react'

function App() {
  const [plants, setPlants] = useState<{ id: number; name: String; notes: string }[]>(() => {
    const saved = localStorage.getItem('plants')
    return saved ? JSON.parse(saved) : []
  })
  const [name, setName] = useState('')
  const [notes, setNotes]=useState('')

  useEffect(() => {
    localStorage.setItem('plants', JSON.stringify(plants))
  }, [plants])

  function handleAddPlant() {
    if (name === '') return
    setPlants([...plants, {id: Date.now(), name, notes}])
    setName('')
    setNotes('')
  }

  return (
    <div>
      <h1>A Garden Journal</h1>

      <input
        placeholder="Plant Name"
        value={name}
        onChange={e => setName(e.target.value)}
        />
        
      <input
      placeholder="Notes"
      value={notes}
      onChange={e => setNotes(e.target.value)}
      />
      <button onClick={handleAddPlant}>Add Plant</button>

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