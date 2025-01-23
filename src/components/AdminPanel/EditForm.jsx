import './AdminPanel.css'
import { useState } from "react"

function EditForm ({ item, handleSave, setEditingItem }) {

    const [name, setName] = useState(item.name)
    const [description, setDescription] = useState(item.description)
    const [price, setPrice] = useState(item.price)
    const [category, setCategory] = useState(item.category)

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSave({ id: item.id, name, description, price, category })
        setEditingItem(false)
    }

    return (
        <div className='edit-form'>
          <h2>Editar Item</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="descripcion">Descripción:</label>
              <textarea
                id="descripcion"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="precio">Precio:</label>
              <input
                type="number"
                id="precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="categoria">Categoria:</label>
              <input
                type="text"
                id="categoria"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <button type="submit">Guardar</button>
          </form>
        </div>
      );
}

export default EditForm