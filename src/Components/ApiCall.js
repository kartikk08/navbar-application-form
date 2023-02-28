import React from 'react'
import {useEffect, useState} from 'react'
import Axios from 'axios'
import Table from 'react-bootstrap/Table';
// import Pagination from 'react-bootstrap/Pagination';



const ApiCall = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10); //to show how many posts 
  const [totalPosts, setTotalPosts] = useState(0);

const [data, setData] = useState([])



useEffect(() => {
  setLoading(true);
Axios.get('https://jsonplaceholder.typicode.com/posts')
.then(res => {
console.log("Getting from ::: ", res.data)
setData(res.data)
}).catch(err => console.log(err));
setLoading(false);

}, [])

const arr = data.map((data, index) => 
{
    return (
   <tbody><tr>
    <td>  { data.id }   </td>
    <td>  {data.title}   </td>
    <td>  {data.body}   </td>
  </tr></tbody> 
)
  
})


  return (

 <div>
 
    <Table striped bordered hover variant="ldark" >
  
    <thead>
    <tr>
    <th>   ID     </th>
    <th>   TITLE   </th>
    <th>   BODY    </th>
    </tr>
    </thead>
    
    {arr}

   </Table>
    
 </div>

)}



    

  

export default ApiCall