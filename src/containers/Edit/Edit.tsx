import React, { useCallback, useEffect, useState } from 'react';
import Form from '../../components/Form/Form.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { IPost, IForm } from '../../types';
import axiosApi from '../../axiosAPL.ts';

const Edit = () => {
const [post,setPost]=useState<IPost>();
  const params = useParams<{ idForm: string }>();
  const navigate = useNavigate();

  const fetchOneGame = useCallback(async (id:string) => {
    const response: {data:IPost} =  await axiosApi<IPost>(`quote/${id}.json`);

    if (response.data){
      setPost(response.data);
    }
  } , []);


useEffect(() =>{
  if(params.idForm){
  void fetchOneGame(params.idForm);
  }
}, [params.idForm , fetchOneGame]);


  const submitForm = async (post:IForm) => {

    try{
      if (params.idForm){
        await axiosApi.put(`games/${params.idForm}.json`, {...post});
        navigate('/');
      }
    }catch(err){
console.error(err);
    }
  };

  return (
    <div>
      <Form gameToEdit={post} submitForm={submitForm} />
    </div>
  );
};

export default Edit;