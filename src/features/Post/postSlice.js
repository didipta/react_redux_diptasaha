import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    posts:[],
    isloading:false,
    postsecess:false,
    isError:false,
    error:""
}

export const getPost=createAsyncThunk("post/getpost",async()=>{
    
    const res=await localStorage.getItem("posts");
    const data=await JSON.parse(res);
    return data;
})
export const addPost=createAsyncThunk("post/addpost",async(post)=>{
    const res=await localStorage.getItem("posts");
    const data=await JSON.parse(res);
    localStorage.setItem("posts",JSON.stringify([...data,post]))
    return [...data,post];
})
export const updatePost=createAsyncThunk("post/updatepost",async(post)=>{
    const res=await localStorage.getItem("posts");
    const data=await JSON.parse(res);
    const item=data.filter(item=>item.id!==post.id);
    localStorage.setItem("posts",JSON.stringify([...item,post].sort((a,b)=>a.id-b.id)))
    return [...item,post].sort((a,b)=>a.id-b.id);
})
export const deletePost=createAsyncThunk("delete/addpost",async(id)=>{
    const res=await localStorage.getItem("posts");
    const data=await JSON.parse(res);
    const item=data.filter(item=>item.id!==id);
    localStorage.setItem("posts",JSON.stringify(item))
    return item;
})


const postSlice=createSlice({
    name:"Posts",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getPost.pending,(state,action)=>{
            state.isloading=true;
            state.isError=false;
        })
        .addCase(getPost.fulfilled,(state,action)=>{
           state.posts=action.payload;
           state.isloading=false;
        })
        .addCase(getPost.rejected,(state,action)=>{
            state.posts=[];
            state.isloading=false;
            state.isError=true;
            state.error=action.error.message;
        })
        .addCase(updatePost.pending,(state,action)=>{
            state.isloading=true;
            state.isError=false;
        })
        .addCase(updatePost.fulfilled,(state,action)=>{
           state.posts=action.payload;
           state.isloading=false;
        })
        .addCase(updatePost.rejected,(state,action)=>{
            state.posts=[];
            state.isloading=false;
            state.isError=true;
            state.error=action.error.message;
        })
        .addCase(deletePost.pending,(state,action)=>{
            state.isloading=true;
            state.isError=false;
        })
        .addCase(deletePost.fulfilled,(state,action)=>{
           state.posts=action.payload;
           state.isloading=false;
        })
        .addCase(deletePost.rejected,(state,action)=>{
            state.posts=[];
            state.isloading=false;
            state.isError=true;
            state.error=action.error.message;
        })
        .addCase(addPost.pending,(state,action)=>{
            state.isloading=true;
            state.postsecess=true;
            state.isError=false;
        })
        .addCase(addPost.fulfilled,(state,action)=>{
           state.posts=action.payload;
           state.postsecess=true;
           state.isloading=false;
        })
        .addCase(addPost.rejected,(state,action)=>{
            state.posts=[];
            state.isloading=false;
            state.postsecess=false;
            state.isError=true;
            state.error=action.error.message;
        })
       


    }
})
export default postSlice.reducer;