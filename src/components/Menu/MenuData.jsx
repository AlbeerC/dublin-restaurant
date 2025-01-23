import { useState, useEffect } from "react"
import { db } from "../../firebase/config"
import { collection, getDocs } from "firebase/firestore"
import MenuList from "./MenuList"
import FilterButtons from "./FilterButtons/FilterButtons"

function MenuData () {

    const [data, setData] = useState()
    const [allData, setAllData] = useState([])
    const [currentFilter, setCurrentFilter] = useState('todo')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, 'menu'))
            const dataArray = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
            setData(dataArray)
            setAllData(dataArray)
          } catch (error) {
            console.error("Error fetching data: ", error)
          } finally {
            setLoading(false)
          }
        }
    
        fetchData()
      }, [])

      const filterData = (category) => {
        setCurrentFilter(category)
        
        if (category === "todo") {
          return setData(allData)
          
        }
        const filteredData = allData.filter((item) => item.category === category)
        setData(filteredData)
      }

      if (loading) {
        return <p className="min-h-screen text-center pt-20">Cargando...</p>
      }

    return (
      <section className="container min-h-screen">
        <h2 style={{color: 'var(--secondary-color)', fontSize: '3rem', textAlign: 'center'}}>Nuestro menú</h2>
        <FilterButtons filterData={filterData} currentFilter={currentFilter} allData={allData} />
        <MenuList data={data} />
      </section>
    )
}

export default MenuData