import { useState } from "react"
import {useNavigate} from "react-router-dom"
import supabase from "../config/supabaseClient"

const Create = () => {
  const navigate = useNavigate()
  const [job, setJob] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [laser, setLaser] = useState('Laser')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!job || !method || !rating) {
      setFormError('Please fill up the empty field')
      return
    }
    const {data, error} = await supabase 
    .from('smoothies')
    .insert([{job, method, rating, laser}])
    if (error) {
      console.log(error)
      setFormError('Please fill up the empty field')
    }

    if (data) {
      console.log(data)
      setFormError(null)
      navigate('/Schedule')
    }
  }
  return (   
<div>
<form onSubmit={handleSubmit}>
    <table  className="page create" class="container-fluid table table-primary">     
     <tbody>
    <tr>
      {/* Job Orders */}
    <td class="col-3" >  <label htmlFor="job">Job Order:</label>
        <input
         type="text"
       id="job"
         value={job}
         onChange={(e)=> setJob(e.target.value)}
         /></td>

       {/* Mehod */}
      <td class="col-3"> <label htmlFor="method">Operation</label>
      <input
      type="text" 
      id="method"
        value={method}
        onChange={(e)=> setMethod(e.target.value)} /></td>

         {/* Rating */}
      <td class="col-3"> <label htmlFor="rating">Rating</label>
      <input
      type="text" 
      id="rating"
        value={rating}
        onChange={(e)=> setRating(e.target.value)} /></td>

    
      <td className="buttons" class="col-3">
      
        </td>      
    </tr>    
  </tbody>
  <button>Create Job Orders</button>

         {formError && <p lassName="error">{formError} </p>}
      
</table> 
</form>

</div>


//     <div className="page create">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="job">Job Order:</label>
//         <input
//         type="text"
//         id="job"
//         value={job}
//         onChange={(e)=> setJob(e.target.value)}
//         />

// <label htmlFor="method">Method:</label>
//         <textarea
        
//         id="method"
//         value={method}
//         onChange={(e)=> setMethod(e.target.value)}        />


// <label htmlFor="laser">Laser Cut:</label>
//         <input
//         type="checkbox"
//         id="laser"
//         name="laser"
//         value={laser}
//         onChange={(e)=> setLaser(e.target.value)}
//         />

// <label htmlFor="rating">Rating:</label>
//         <input
//         type="number"
//         id="rating"
//         value={rating}
//         onChange={(e)=> setRating(e.target.value)}
//         />

//         <button>Create Job Orders</button>

//         {formError && <p lassName="error">{formError} </p>}
//       </form>
//     </div>
  )
}

export default Create