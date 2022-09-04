import React from "react";
import Key from "../components/key";

export default function HomePage() {
	const [ likes, setLikes ] = React.useState(0);
	return <div>
		<h1>WELCOME</h1>
		<button onClick={() => {setLikes(likes + 1)}}>
			Like { likes }
		</button>
		<Key character="k" size="20px" />
	</div>;
}
