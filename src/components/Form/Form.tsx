import React, { useEffect, useState } from 'react';
import { IForm } from '../../types';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography
} from '@mui/material';
import Grid from '@mui/material/Grid2';

const initialForm = {
  name:'',
  description:'',

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

    submitForm({...form })

    if (!gameToEdit){
      setForm({...initialForm});
    }
  };
  const [selectedCategory, setSelectedCategory] = React.useState(''); // State for selected category

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value as string);
    setForm(prevState => ({...prevState, category: event.target.value as string})); // Update form state
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Typography variant="h4"  sx={{ flexGrow: 1, textAlign: 'center' }}>
        {gameToEdit ? `Edit` : 'Add new'}  game
      </Typography>

      <Grid container spacing={2} sx={{ mx: 'auto', width: '50%', mt:4 }}>
        <Grid size={12}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedCategory} // Use selectedCategory state
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={'star-wars'}>star-wars</MenuItem>
                <MenuItem value={'Famous-people'}>Famous-people</MenuItem>
                <MenuItem value={'Saying'}>Saying</MenuItem>
                <MenuItem value={'Humour'}>Humour</MenuItem>
                <MenuItem value={'Motivations'}>Motivations</MenuItem>
              </Select>
            </FormControl>
          </Box>

        </Grid>

        <Grid size={12}>
          <TextField
            sx={{width:'100%'}}
            id="outlined-basic"
            label="Author"
            name="author"
            variant="outlined"
            value={form.author}
            onChange={onChangeFiled}/>
        </Grid><Grid size={12}>
          <TextField
            sx={{width:'100%'}}
            id="outlined-basic"
            label="Description"
            name="description"
            variant="outlined"
            value={form.description}
            onChange={onChangeFiled}/></Grid>

        <Grid size={12}><Button  sx={{width:'100%'}} type="submit" variant="contained">
          {gameToEdit ? `Edit` : 'Add'}
        </Button></Grid>
      </Grid>


    </form>
  );
};

export default Form;