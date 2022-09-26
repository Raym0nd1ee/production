import { Link } from "react-router-dom"
import supabase from "../config/supabaseClient"

const smoothieCard = ({smoothie, onDelete})=> {

    const handleDelete = async () => {
      const  {data, error} = await supabase
      .from ('smoothies')
      .delete()
      .eq('id', smoothie.id)
    //   .select()

      if (error) {
        console.log(error)
        if (data) {
            // console.log(data)
            onDelete(smoothie.id)
        }
      }
    }

return (
    <div className="smoothie-card">
        <h3>Job Order: {smoothie.job}</h3>
        <h4>Operation</h4>
        <p>{smoothie.method}</p> 
        <div className="rating">{smoothie.rating}</div>
        <p>{smoothie.laser}</p>
        <div className="buttons">
            <Link to={'/' + smoothie.id}>
                <i className="material-icons">edit</i>
                <i className="material-icons" onClick={handleDelete}>delete</i>
                
            </Link>
        </div>
    </div>
)
}

export default smoothieCard