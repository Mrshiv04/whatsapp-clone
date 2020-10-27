import React from 'react';
import './Sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { IconButton, Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebar_header'>
				<Avatar src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' />
				<div className='sidebar_headerRight'>
					<IconButton>
						<DonutLargeIcon style={{ color: 'grey' }} />
					</IconButton>
					<IconButton>
						<ChatIcon style={{ color: 'grey' }} />
					</IconButton>
					<IconButton>
						<MoreVertIcon style={{ color: 'grey' }} />
					</IconButton>
				</div>
			</div>
			<div className='sidebar_search'>
				<div className='sidebar_searchContainer'>
					<SearchOutlined />
					<input type='text' placeholder='Search or start a new chat' />
				</div>
			</div>
			<div className='sidebar_chats'>
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
			</div>
		</div>
	);
}

export default Sidebar;
