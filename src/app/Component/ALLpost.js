import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, getPost } from '../../features/Post/postSlice';
import Addpost from './Addpost';
import Update from './Update';

const ALLpost = () => {
     const dispatch = useDispatch();
    const {posts,isloading}=useSelector((state)=>state.post);
    useEffect(()=>{
     dispatch(getPost());
    },[])
    return (
        <>
        {
            isloading===false&& <div>
            <h1 className="text-3xl font-extrabold p-5">All Posts</h1>
            <div>
            <label htmlFor="Addpost_model" className="btn btn-md m-5 bg-sky-500 border-none text-white">ADD Posts</label>
            </div>
           <div>

           <div className="overflow-x-auto w-full p-5">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Body</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            posts.map(post=>
                <tr key={post.id}>
                <td>
                    <div className="font-bold">{post.id}</div>
                </td>
                <td>
                    <div className="font-bold">{post.title}</div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">{post.body.slice(0,50)+"...."}</span>
                </td>
                <th>
                
                <label htmlFor={`model_${post.id}`} className="btn btn-ghost btn-xs bg-blue-500 text-white">Update</label>
                  <button className="btn btn-ghost btn-xs bg-red-500 text-white ml-3" onClick={()=>dispatch(deletePost(post.id))}>delete</button>
                </th>

                <Update post={post}></Update>
              </tr>
                )
        }
     
    </tbody>
    
  </table>
</div>
<Addpost id={posts?.length+1} posts={posts}></Addpost>
           </div>
        </div>
        }
        </>
       
    );
};

export default ALLpost;