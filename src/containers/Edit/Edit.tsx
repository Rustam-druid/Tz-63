import React, { useCallback, useEffect, useState } from 'react';
import Form from '../../components/Form/Form.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { IPost, IForm } from '../../types';
import axiosApi from '../../axiosAPL.ts';

const Edit = () => {
const [game,setGame]=useState<IPost>();
  const params = useParams<{ idForm: string }>();
  const navigate = useNavigate();

  const fetchOneGame = useCallback(async (id:string) => {
    const response: {data:IPost} =  await axiosApi<IPost>(`post/${id}.json`);

    if (response.data){
      setGame(response.data);
    }
  } , []);


useEffect(() =>{
  if(params.idGame){
  void fetchOneGame(params.idGame);
  }
}, [params.idForm , fetchOneGame]);


  const submitForm = async (game:IForm) => {

    try{
      if (params.idGame){
        await axiosApi.put(`games/${params.idGame}.json`, {...game});
        navigate('/');
      }
    }catch(err){
console.error(err);
    }
  };

  return (
    <div>
      <Form gameToEdit={game} submitForm={submitForm} />
    </div>
  );
};

export default Edit;