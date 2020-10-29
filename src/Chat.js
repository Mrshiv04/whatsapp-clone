import React, { useState } from 'react';
import './Chat.css';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { IconButton, Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';

function Chat({ messages }) {
	const [input, setInput] = useState('');

	const sendMessage = async (e) => {
		e.preventDefault();
		await axios.post('/messages/new', {
			message: input,
			name: 'Sender',
			timestamp: 'today boy',
			received: true,
		});

		setInput('');
	};

	return (
		<div className='chat'>
			<div className='chat_header'>
				<Avatar />
				<div className='chat_headerInfo'>
					<h3>room name</h3>
					<p>Last seen at yesterday</p>
				</div>
				<div className='chat_headerRight'>
					<IconButton>
						<SearchOutlined style={{ color: 'grey' }} />
					</IconButton>
					<IconButton>
						<AttachFileIcon style={{ color: 'grey' }} />
					</IconButton>
					<IconButton>
						<MoreVertIcon style={{ color: 'grey' }} />
					</IconButton>
				</div>
			</div>
			<div className='chat_body'>
				{messages.map((message) => (
					<p className={`chat_message ${message.received && 'chat_receiver'}`}>
						<span className='chat_name'>{message.name}</span>
						{message.message}
						<span className='chat_timestamp'>{message.timestamp}</span>
					</p>
				))}
			</div>
			<div className='chat_footer' style={{}}>
				<InsertEmoticonIcon style={{ color: 'gray' }} />
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder='Type a message'
						type='text'
					/>
					<button onClick={sendMessage} type='submit'>
						Send
					</button>
				</form>
				<MicIcon style={{ color: 'gray' }} />
			</div>
		</div>
	);
}

export default Chat;
