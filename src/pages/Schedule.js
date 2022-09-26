
import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"
// components
import JobTable from "../components/JobTable"

const Schedule = () => {

 const [fetchError, setFetchError] = useState(null)
 const [smoothies, setSmoothies] = useState(null)
 const [orderBy, setOrderBy] = useState('created_at')

 const handleDelete = (id) => {
  setSmoothies (preSmoothies =>{
    return preSmoothies.filter (sm => sm.id !== id)
  })
 }

 useEffect (()=>{
  const fetchSmoothies = async () => {
    const {data, error} = await supabase
    .from('smoothies')
    .select()
    .order(orderBy, {ascending: true})

    if (error) {
      setFetchError ('Could not fetch the smoothies')
      setSmoothies (null)
      console.log('error')
    }
    if (data) {
      setSmoothies(data)
      setFetchError(null)
    }   
  }
  fetchSmoothies() 
 },[orderBy]) 

  return (    
    <div className="page schedule">
      
      
        
      {fetchError && (<p>{fetchError}</p>)}
      {smoothies && ( 
        <div className="smoothies">
        <div className="order-by">
          <p>Order: by</p>
          <button onClick={()=>setOrderBy('created_at')}>Time Created</button>
          <button onClick={()=>setOrderBy('job')}>Job Order</button>
          <button onClick={()=>setOrderBy('rating')}>Rating</button>
          {orderBy}
        </div>
        <table class="container-fluid table-bordered border-primary"> 
       <thead >
          <td class="col-1">Status</td>  
          <td class="col-4">Job No</td>  
          <td class="col-4">Operation</td> 
          <td class="col-4">Rating</td>
          <td className="col-2"></td>                
        </thead> 
        </table>
        <div> 
              
        <table class="container-fluid table table-bordered border-primary">         
          {smoothies.map (smoothie=>
          <JobTable key={smoothie.id}          
          smoothie={smoothie}
          onDelete={handleDelete}
          />
          ) }        
                    
        </table>         
        </div> </div> 
        )}
    </div>    
  )
}
export default Schedule