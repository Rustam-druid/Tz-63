import ToolBar from './components/ToolBar/ToolBar.tsx';
import React from 'react';
import Home from './containers/Home/Home.tsx';
import { Route, Routes } from 'react-router-dom';
import { Typography } from '@mui/material';
import Edit from './containers/Edit/Edit.tsx';
import NewPost from './containers/NewPost/NewPost.tsx';
import Delete from './containers/Delete/Delete.tsx';

const App = () => {


  return (
    <>
      <div className="p-0 container border border-black border-3 con mt-4">
        <div className='bg-dark-subtle border-3 border-bottom border-black' style={{height: '60px'}}></div>

        <main className="p-3 ">
          <ToolBar/>
          <div className="row">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quote" element={<Home />} />
              <Route path="/quote/newquote" element={<NewPost />} />
              <Route path="/quote/:idPost/edit" element={<Edit />} />
              <Route path="/quote/:idPost/delete" element={<Delete />} />
              <Route path="*" element={<Typography variant="h1"> Not Found</Typography>} />
            </Routes>
          </div>
        </main>

        <div className='bg-dark-subtle border-top border-3 border-black' style={{height: '40px'}}></div>

      </div>
    </>
  );
};

export default App;
