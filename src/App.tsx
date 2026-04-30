import { useState } from 'react'

interface ListItem {
  id: number
  label: string
}

export function App() {
  const [list, setList] = useState<ListItem[]>([])
  const [newItem, setNewItem] = useState('')

  const addItem = () => {
    if (newItem !== '') {
      setList([...list, { id: list.length + 1, label: newItem }])
      setNewItem('')
    }
  }

  const removeOCC = (id: number) => {
    if (list.length > 0){
      setList([...list.filter((item) => item.id !== id)])
    }
  }

  return (
    <div>
      <p>Lista de Tarefas</p>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={() => {addItem()}}>Adicionar</button>

      <ol>
        {list.map((listItem) => (
          <li key={listItem.id}>{listItem.label}<button onClick={() => removeOCC(listItem.id)}>Remover</button></li>
        ))}
      </ol>

    </div>
  )
}