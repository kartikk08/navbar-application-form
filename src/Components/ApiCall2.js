import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'

function ApiCall2(){
    const  [posts, setPosts] = useState([])
    // const [id,setId] = useState(1)
    // const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    // const handleClick = () => {
    //     setIdFromButtonClick(id)
    // }

useEffect(() => {
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(res => {
    console.log("POSTS ==> ", res)
    setPosts(res.data)
}).catch(err => {
    console.log(err)
})
}, [])

    return(
        <div>
        {/* <input type ="text" value={id} onChange={e => setId(e.target.value)}/>
        <button type="button" onClick={handleClick}>Fetch Data</button>
        <div>{post.title}</div> */}
        
        <h2>Fetching Data Using Functional Component</h2>
        
        {/* <ul> */}
            { posts.map(post => ( 
               
                <table key={post.id}>
               {post.id}
                -- {post.title}
               
                </table>
            ))}
        {/* </ul>  */}

        </div>
    )
}
export default ApiCall2