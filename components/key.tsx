export default function Key(props: { character: string, size: string }) {
	return <div style={{
		width: props.size,
		height: props.size,
		borderStyle: "solid",
		borderWidth: "5px",
		borderRadius: "10px",
	//	textAlign: "center",
		padding: `calc(${props.size} / 3)`,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	}}>
		{ props.character }
	</div>
}
