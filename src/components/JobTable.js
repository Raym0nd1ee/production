import { Link } from "react-router-dom"
import supabase from "../config/supabaseClient"



const jobTable = ({smoothie, onDelete, rating, method, job,setFormError,handleUpdate})=> {

    const handleDelete = async () => {
      const  {data, error} = await supabase
      .from ('smoothies')
      .delete()      
      .eq('id', smoothie.id)

      const handleUpdate = async () => {
        const  {data, error} = await supabase
        .from ('smoothies')        
        .update([{ job, method, rating }])
        .eq('id', smoothie.id)
      }
  
if (error) {
  console.log(error)
  setFormError('Please fill up the empty field')
}

      if (error) {
        console.log(error)
        if (data) {
            console.log(data)
            onDelete(smoothie.id)
            // onUpdate(smoothie.id)
        }
        }
    }

return (   

<table class="container-fluid table table-bordered border-primary"> 
   <tbody>
    <tr>
    <td class="col-1">{smoothie.status}</td>
      <td class="col-4">{smoothie.job}</td>
      <td class="col-4">{smoothie.method} </td>
      <td class="col-4">{smoothie.rating}</td>
      <td className="buttons" class="col-2">
      <Link to={'/' + smoothie.id}>
        <i className="material-icons" onClick={handleDelete}>delete</i>
        </Link>
        </td>
        <td className="buttons" class="col-2">
      <Link to={'/' + smoothie.id}>
        <i className="material-icons" onClick={handleUpdate}>edit</i>
        </Link>
        </td>              
    </tr>    
  </tbody>

  
</table>  

)
}

export default jobTable