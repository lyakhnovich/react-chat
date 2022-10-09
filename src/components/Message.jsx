import React, {useContext} from 'react';
import {ChatContext} from "../context/ChatContext";
import {AuthContext} from "../context/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div className='message owner'>
      {/*<div className='messageInfo'>*/}
      {/*  <img src='https://avatars.githubusercontent.com/u/60649315?v=4' alt=''/>*/}
      {/*  <span>just now</span>*/}
      {/*</div>*/}
      {/*<div className='messageContent'>*/}
      {/*  <p>hello</p>*/}
      {/*  <img src='https://avatars.githubusercontent.com/u/60649315?v=4' alt=''/>*/}
      {/*</div>*/}
    </div>
  );
};

export default Message;