import React from "react";
import Key from "../components/key";

function Keyboard(): JSX.Element {
	return <div>
		YAY
	</div>;
}

export default function HomePage(props: { keyboard: JSX.Element }): JSX.Element {
	const [ likes, setLikes ] = React.useState(0);
	return <div>
		<h1>WELCOME</h1>
		<button onClick={() => {setLikes(likes + 1)}}>
			Like { likes }
		</button>
		{ props.keyboard }
		<Key character="k" size="20px" />
	</div>;
}

// export function getStaticProps() {
// 	let props = {
// 		keyboard: Keyboard()
// 	};

// 	return { props };
// }
