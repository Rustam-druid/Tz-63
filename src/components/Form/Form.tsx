import React, { useEffect, useState } from 'react';
import { IForm } from '../../types';
import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const initialForm = {
  name:'',
  description:'',
  platform:'',
  price:0,
};

interface Props{
  gameToEdit?: IForm;
  submitForm: {game:IForm};
}

const Form:React.FC<Props> = ({gameToEdit, submitForm}) => {
  const [form,setForm]=useState<IForm>(initialForm);

  useEffect(()=>{
    if (gameToEdit){
      setForm(prevState => ({
        ...prevState,
        ...gameToEdit,
      }));
    }
  }, [gameToEdit]);

const onChangeFiled = (e: React.ChangeEvent<HTMLInputElement>)=> {
  const {name,value} = e.target;
  setForm(prevState => ({
    ...prevState,
      [name]:value
  } ))
}

  const onSubmitForm =async  (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();

    submitForm({...form, price: Number(form.price) })

if (!gameToEdit){
  setForm({...initialForm});
}
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Typography variant="h4"  sx={{ flexGrow: 1, textAlign: 'center' }}>
        {gameToEdit ? `Edit` : 'Add new'}  post
      </Typography>

      <Grid container spacing={2} sx={{ mx: 'auto', width: '50%', mt:4 }}>
        <Grid size={12}>
          <TextField
            sx={{width:'100%'}}
            id="outlined-basic"
            label="Name"
            name="name"
            variant="outlined"
            value={form.name}
          onChange={onChangeFiled}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            sx={{width:'100%'}}
            id="outlined-basic"
          label="Description"
          name="description"
          variant="outlined"
          value={form.description}
            onChange={onChangeFiled}/></Grid>



        <Grid size={12}><Button  sx={{width:'100%'}} type="submit" variant="contained">
          {gameToEdit ? `Edit` : 'Save'}
        </Button></Grid>
      </Grid>









    </form>
  );
};

export default Form;