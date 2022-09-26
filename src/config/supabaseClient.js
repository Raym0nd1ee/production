
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dyewyxruggywvtjictjk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5ZXd5eHJ1Z2d5d3Z0amljdGprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI3NjU0NDksImV4cCI6MTk3ODM0MTQ0OX0.zaIgtaf2e4lP7hynyTBZTqMtl086uXT7CxS_EWYVqqw'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
//process.env.REACT_APP_SUPABASE_ANON_KEY