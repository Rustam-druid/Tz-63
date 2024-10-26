import React, { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosAPL.ts';
import { IPost, IGameAPI } from '../../types';
import { Button, Card, CardActions, CardContent, ListItemButton, ListItemText, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid2';

const Home = () => {
  const [games, setGames] = useState<IPost[]>([]);

  const fetchData = useCallback(async () => {
    const response: { data: IGameAPI } = await axiosApi<IGameAPI>('post.json');

    if (response.data) {
      const gamesFormAPI: IPost[] = Object.keys(response.data).map(gameKey => {
        return {
          ...response.data[gameKey],
          id: gameKey,
        };
      });
      setGames(gamesFormAPI);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <>
      <Grid container spacing={2} sx={{justifyContent: 'space-between'}}>
        <Grid  sx={{width:'200'}} >
        <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="All" />
        </ListItemButton>  <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="Star Wars" />
        </ListItemButton> <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="Famous people" />
        </ListItemButton> <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="Saying" />
        </ListItemButton> <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="Humour" />
        </ListItemButton><ListItemButton component="a" href="#simple-list">
          <ListItemText primary="Motivational" />
        </ListItemButton>
        </Grid>


      {games.length === 0 ? <p>no post</p> :
        <Grid container spacing={2}>
          {games.map((game) => (
            <Grid key={game.id}  sx={{width:'100%', border:3} }>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 15 }}>
                    {new Date().toLocaleDateString('ru-RU')}
                  </Typography>
                  <Typography gutterBottom sx={{ fontSize: 19 }}>
                    {game.name}
                  </Typography>
                  <Button sx={{ backgroundColor: 'white', color: 'black', border: 'black' }} variant="contained" size="small" component={NavLink} to={`/games/${game.id}/edit`}>Read More >></Button>
                </CardContent>
              </Card>
            </Grid>
          ))}

        </Grid>
      }
      </Grid>
    </>
  );
};

export default Home;