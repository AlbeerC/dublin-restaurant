import './AdminPanel.css'
import { auth, db } from '../../firebase/config'
import { signOut } from 'firebase/auth'
import { useState } from 'react'
import { useEffect } from 'react'
import { getDocs, collection, addDoc, updateDoc, doc } from 'firebase/firestore'
import EditForm from './EditForm'

function Panel ( {setIsLogged} ) {

    const handleLogout = async () => {
        await signOut(auth)
        setIsLogged(false)
    }

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [newItem, setNewItem] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
    })
    const [editingItem, setEditingItem] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
              const querySnapshot = await getDocs(collection(db, 'menu'))
              const dataArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
              setData(dataArray)
            } catch (error) {
              console.error("Error fetching data: ", error)
            } finally {
              setLoading(false)
            }
          }

          fetchData()
    }, [data])

    const handleAddRow = async () => {
        try {
            if (newItem.name === '' || newItem.description === '' || newItem.price === '' || newItem.category === '') {
                alert('Por favor, rellena todos los campos')
                return
            }

            const docRef = await addDoc(collection(db, 'menu'), newItem)
            console.log("Nuevo item creado con ID:", docRef.id)

            // Limpiar datos
            setNewItem({name: '', description: '', price: '', category: ''})
        } catch (error) {
            console.log("Error al crear nuevo item:", error)
        }
    }

    const handleNewRowChange = (e) => {
        setNewItem({ ...newItem, [e.target.name]: e.target.value })
    }

    const handleEdit = (item) => {
        setEditingItem(item)
      }
    
      const handleSaveEdit = async (updatedItem) => {
        try {
          await updateDoc(doc(db, 'menu', updatedItem.id), updatedItem)
          // Actualiza el estado de items para reflejar los cambios
          const updatedItems = items.map((item) =>
            item.id === updatedItem.id ? updatedItem : item
          )
          setItems(updatedItems)
          setEditingItem(null) // Cierra el formulario de edición
        } catch (error) {
          console.error('Error al actualizar el item:', error)
        }
      }

    return (
        <section className='panel container'>
            <div className="top">
                <h2>Panel de administración</h2>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Accion</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                            <td className='edit'><button onClick={() => handleEdit(item)}>Editar</button></td>
                        </tr>
                    ))}
                    {/* New row */}
                    <tr className='new-row'>
                        <td>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                value={newItem.name}
                                onChange={handleNewRowChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="description"
                                placeholder="Descripción"
                                value={newItem.description}
                                onChange={handleNewRowChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="price"
                                placeholder="Precio"
                                value={newItem.price}
                                onChange={handleNewRowChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="category"
                                placeholder="Categoría"
                                value={newItem.category}
                                onChange={handleNewRowChange}
                            />
                        </td>
                        <td className='add-btn'>
                            <button onClick={handleAddRow}>Agregar</button>
                        </td>
                    </tr>    
                </tbody>
            </table>
            {editingItem && (
                <EditForm
                    item={editingItem}
                    handleSave={handleSaveEdit}
                    setEditingItem={setEditingItem}
                />
            )}
        </section>
    )
}

export default Panel