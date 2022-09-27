import React from 'react';

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='find a user'/>
      </div>
      <div className='userChat'>
        <img src='https://avatars.githubusercontent.com/u/60649315?v=4' alt=''/>
        <div className='userChatInfo'>
          <span>Kek</span>
        </div>
      </div>
    </div>
  );
};

export default Search;