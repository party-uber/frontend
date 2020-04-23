import React from "react";
import "../chat/chat.css";

class Chat extends React.Component {
	render() {
		return (
			<section class="msger">
				<header class="msger-header">
					<div class="msger-header-title">
						<i class="fas fa-comment-alt"></i> Dominator
					</div>
					<div class="msger-header-options">
						<span>
							<i class="fas fa-cog"></i>
						</span>
					</div>
				</header>

				<main class="msger-chat">
					<div class="msg-left-msg">
						<div class="msg-img"></div>

						<div class="msg-bubble">
							<div class="msg-info">
								<div class="msg-info-name">Niray</div>
								<div class="msg-info-time">12:45</div>
							</div>

							<div class="msg-text">
								Morgen dikke fissa!
								<span role="img">:-)</span>
							</div>
						</div>
					</div>

					<div class="msg-right-msg">
						<div class="msg-img"></div>

						<div class="msg-bubble">
							<div class="msg-info">
								<div class="msg-info-name">Rens</div>
								<div class="msg-info-time">12:46</div>
							</div>

							<div class="msg-text">Jazeker!</div>
						</div>
					</div>
				</main>

				<form class="msger-inputarea">
					<input
						type="text"
						class="msger-input"
						placeholder="Enter your message..."
					/>
					<button type="submit" class="msger-send-btn">
						Send
					</button>
				</form>
			</section>
		);
	}
}

export default Chat;
