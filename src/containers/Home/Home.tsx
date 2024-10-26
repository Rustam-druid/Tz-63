import React, { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosAPL.ts';
import { IPost, IPostAPI } from '../../types';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid2';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);


  const fetchData = useCallback(async () => {
    const response: { data: IPostAPI } = await axiosApi<IPostAPI>('quote.json');
    if (response.data) {
      const gamesFormAPI: IPost[] = Object.keys(response.data).map(gameKey => ({
        ...response.data[gameKey],
        id: gameKey,
      }));
      setPosts(gamesFormAPI);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);



  return (
    <>
      <Grid container spacing={2} sx={{justifyContent: 'space-between'}}>

        <Grid>
          <div>
            <Button
              sx={{backgroundColor: 'white', color: 'black', border: 'black'}}
              variant="contained"
              size="small"
            >
              all
            </Button>
          </div>
          <div>
            <Button
            sx={{backgroundColor: 'white', color: 'black', border: 'black', mt: 1}}
            variant="contained"
            size="small"
          >
            Star Wars
          </Button>
          </div>
          <div><Button
            sx={{backgroundColor: 'white', color: 'black', border: 'black', mt: 1}}
            variant="contained"
            size="small"
          >
            Famous people
          </Button></div>
          <div><Button
            sx={{backgroundColor: 'white', color: 'black', border: 'black', mt: 1}}
            variant="contained"
            size="small"
          >
            Saying
          </Button></div>
          <div><Button
            sx={{backgroundColor: 'white', color: 'black', border: 'black', mt: 1}}
            variant="contained"
            size="small"
          >
            Humour
          </Button></div>

          <Button
            sx={{backgroundColor: 'white', color: 'black', border: 'black', mt: 1}}
            variant="contained"
            size="small"
          >
            Motivational
          </Button>

        </Grid>


        <Grid size={8}>

            <Grid >
              {posts.map((game) => (
                <Grid key={game.id} sx={{width: '100%' , border:3}}>
                  <Card sx={{minWidth: 275}}>
                    <CardContent>
                      <Grid container spacing={2} sx={{justifyContent: 'space-between'}}>
                        <Typography gutterBottom variant="h5" component="div">
                          {game.description}
                        </Typography>
                        <div>
                          <Button
                            sx={{backgroundColor: 'white', color: 'black', border: 'black', mr: 2}}
                            variant="contained"
                            size="small"
                            component={NavLink}
                            to={`/quote/${game.id}/edit`}
                          >Edit
                          </Button>
                          <Button
                            sx={{backgroundColor: 'white', color: 'black', border: 'black'}}
                            variant="contained"
                            size="small"
                            component={NavLink}
                            to={`/quote/${game.id}/delete`}
                          >
                            Del
                          </Button>
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid >
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;