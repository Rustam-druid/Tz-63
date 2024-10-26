import React, { useCallback, useEffect, useState } from 'react';
import Form from '../../components/Form/Form.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { IPost, IForm } from '../../types';
import axiosApi from '../../axiosAPL.ts';

const EditGame = () => {
  const [game,setGame]=useState<IPost>();
  const params = useParams<{ idPost: string }>();
  const navigate = useNavigate();

  const fetchOneGame = useCallback(async (id:string) => {
    const response: {data:IPost} =  await axiosApi<IPost>(`quote/${id}.json`);

    if (response.data){
      setGame(response.data);
    }
  } , []);


  useEffect(() =>{
    if(params.idPost){
      void fetchOneGame(params.idPost);
    }
  }, [params.idPost , fetchOneGame]);


  const submitForm = async (game:IForm) => {

    try{
      if (params.idPost){
        await axiosApi.put(`quote/${params.idPost}.json`, {...game});
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

export default EditGame;