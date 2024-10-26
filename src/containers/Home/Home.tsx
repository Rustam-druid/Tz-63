import React, { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosAPL.ts';
import { IPost, IGameAPI } from '../../types';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
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
      {games.length === 0 ? <p>no post</p> :
        <Grid container spacing={2}>
          {games.map((game) => (
            <Grid key={game.id}>
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
    </>
  );
};

export default Home;