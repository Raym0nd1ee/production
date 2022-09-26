import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient"

const Update = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const [job, setJob] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [status, setStatus] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!job || !method || !rating) {
      setFormError('Please fill in Form')
      return
    }
    const {data, error} = await supabase 
    .from('smoothies')
    .update ({job, method, rating, status})
    .eq ('id', id)
    .select()

    if (error) {
      console.log(error)
      setFormError('Please fill in the form correctly')
    }

    if (data) {
      console.log(data)
      setFormError(null)
      navigate('/')
    }
  }

  useEffect (()=> {
    const fetchSmoothies = async () => {
      const {data, error} = await supabase
      .from('smoothies')
      .select()
      .eq('id', id)
      .single()

      if (error) {
        navigate('/', {replace:true})
      }
      if (data) {
        setJob(data.job)
        setMethod(data.method)
        setRating(data.rating)
        setStatus(data.status)
        console.log(data)
      }
    }
    fetchSmoothies()
  }, [id, navigate])
  return (
    <div className="page update">
      <form onSubmit={handleSubmit}>
        <label htmlFor="job">Job Order:</label>
        <input
        type="text"
        id="job"
        value={job}
        onChange={(e)=> setJob(e.target.value)}
        />

<label htmlFor="method">Method:</label>
        <textarea
        
        id="method"
        value={method}
        onChange={(e)=> setMethod(e.target.value)}
        />

<label htmlFor="rating">Rating:</label>
        <input
        type="number"
        id="rating"
        value={rating}
        onChange={(e)=> setRating(e.target.value)}
        />

<label htmlFor="status">Status:</label><br/>
<select value={status}  onChange={(e)=> setStatus(e.target.value)}>
            <option value="Started">Started</option>
            <option value="Completed">Completed</option>
            <option value="In-Progess">In-Progess</option>
            </select>
            
  
        <button>Update Work Order</button>      

        {formError && <p className="error">{formError} </p>}
      

      </form>
      
    </div>
  )
}

export default Update