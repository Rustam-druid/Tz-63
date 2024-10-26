import React from 'react';
import Form from '../../components/Form/Form.tsx';
import { IForm } from '../../types';
import axiosApi from '../../axiosAPL.ts';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const navigate = useNavigate();
  const submitForm = async (post:IForm) => {
     await axiosApi.post('quote.json', {...post});
    navigate('/');
  };

  return (
    <>
      <Form submitForm={submitForm} />
    </>
  );
};

export default NewPost;