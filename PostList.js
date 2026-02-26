import React, { useEffect, useState } from "react";
function PostList() {
    let apiurl = 'https://jsonplaceholder.typicode.com/posts';
    //created url variable to store the url from which we need to fetch the data.
    let [posts, setPosts] = useState([]);
    // we need to fetch the above data using the url and using the fetch function
    // fetch function comes from asnychronous js coding.
    // asyncronous javascript coding. fetch function
    // post array 
    function handleDel(delItem){

       
        posts=[...posts.filter((delId) => delId.id !== delItem)];
        setPosts(posts);
    }
  

    useEffect(() => {
        fetch(apiurl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network issue!');
                }
                else {
                    console.log("data fetch from url successfull");
                }
                return response.json();
                // to convert the response data into json format we need to use the json() method of the response object.
            })
            .then((data) => {
                setPosts(data);

            })
            .catch((err) => {
                console.log("Ops there is an issue");
            })


    }
        , [])
        //[] used to make run only once []==empty array
    return (

         <>
         <div class="container">
                
    
           <h1 class="display-1"> POSTS LIST</h1>
            <table>
                <thead>
                    <th>ID</th>
<                    th>Title</th>
                    <th>Body</th>
                    <th>Action Delete</th>
                </thead>
                <tbody>

                    {posts.map((post) => (
                        <tr key={post.id}>
                            
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td> <b>{post.body}</b></td>
                    <td> <button className="btn btn-danger" onClick={() =>handleDel(post.id)}>DELETE</button></td>
                        </tr>
                ))}

                    
                </tbody>
            </table>
                    
         </div>
        </>
    );
}
export default PostList;