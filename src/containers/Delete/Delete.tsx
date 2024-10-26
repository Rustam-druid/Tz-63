import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IPost } from '../../types';
import axiosApi from '../../axiosAPL.ts';

const Delete = () => {
  const [game, setGame] = useState<IPost>();
  const params = useParams<{ idPost: string }>();
  const navigate = useNavigate();

  const fetchOneGame = useCallback(async (id: string) => {
    try {
      const response = await axiosApi<IPost>(`quote/${id}.json`); // Corrected URL
      setGame(response.data);
    } catch (error) {
      console.error("Error fetching game data:", error);
    }
  }, []);

  useEffect(() => {
    if (params.idPost) {
      fetchOneGame(params.idPost);
    }
  }, [params.idPost, fetchOneGame]);

  const handleDelete = async () => {
    try {
      if (params.idPost) {
        await axiosApi.delete(`quote/${params.idPost}.json`);
        navigate('/');
      }
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  };

  return (
    <div>
      {game && (
        <>
          <p>Вы уверены, что хотите удалить Цитату "{game.description}"?</p>
          <button onClick={handleDelete}>Удалить</button>
        </>
      )}
      {!game && <p>Загрузка...</p>}
    </div>
  );
};

export default Delete;