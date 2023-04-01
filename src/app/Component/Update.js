import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updatePost } from '../../features/Post/postSlice';

const Update = ({post}) => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {

        const postup={
            id:post.id,
            title:data.Title,
            body:data.Body
        }
        dispatch(updatePost(postup));
    }
    return (
        <div>
       
        <input type="checkbox" id={`model_${post.id}`} className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor={`model_${post.id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Add Post!</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-96 mx-auto p-5">
            <div className='space-y-3'>
              <div className='flex flex-col items-start'>
                <label htmlFor='Title' className='ml-5'>
                  Title
                </label>
                <input type='Text' {...register("Title")} id='Title' 
                className="input input-bordered input-sm w-full max-w-xs"
                defaultValue={post.title}
                />
              </div>
              <div className='flex flex-col items-start'>
                <label htmlFor='Body' className='ml-5'>
                  Body
                </label>
                <input
                  type='text'
                  id='Body'
                  {...register("Body")}
                  className="input input-bordered input-sm w-full max-w-xs"
                  defaultValue={post.body}
                />
              </div>
              <div className='relative !mt-8'>
                <button
                  type='submit'
                  className='font-bold text-white py-3 rounded-full bg-primary w-full'
                >
                  Post
                </button>
              </div>
              </div>
              </form>
        </div>
        </div>
        </div>
    );
};

export default Update;