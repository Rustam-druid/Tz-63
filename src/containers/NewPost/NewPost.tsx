import React from 'react';
import Form from '../../components/Form/Form.tsx';
import { IForm } from '../../types';
import axiosApi from '../../axiosAPL.ts';

const NewPost = () => {
  const submitForm = async (game:IForm) => {
     await axiosApi.post('post.json', {...game});
  }

  return (
    <>
      <Form submitForm={submitForm} />
    </>
  );
};

export default NewPost;