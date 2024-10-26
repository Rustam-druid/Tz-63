import React from 'react';
import Form from '../../components/Form/Form.tsx';
import { IForm } from '../../types';
import axiosApi from '../../axiosAPL.ts';

const NewPost = () => {
  const submitForm = async (post:IForm) => {
     await axiosApi.post('quote.json', {...post});
  }

  return (
    <>
      <Form submitForm={submitForm} />
    </>
  );
};

export default NewPost;