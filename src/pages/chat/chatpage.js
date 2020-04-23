import React from "react";
import Navbar from "../../component/navbar/nav";
import Chat from "../../component/chat/chat";
import './chatpage.css';

class Chatpage extends React.Component {
	render() {
		return (
			<div class="flexboxes">
				<Navbar />

				<div class="rightpanel">
					<Chat />
				</div>
			</div>
		);
	}
}

export default Chatpage;
