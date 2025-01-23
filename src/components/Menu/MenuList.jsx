import FilterButtons from "./FilterButtons/FilterButtons"
import MenuItem from "./MenuItem/MenuItem"

function MenuList({ data }) {
    
    return (
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
                <MenuItem 
                    key={item.id}
                    data={item}
                />
            ))}
        </section>
    )
}

export default MenuList