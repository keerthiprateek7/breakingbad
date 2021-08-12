import React from "react";
import { Link, useHistory } from 'react-router-dom';

const quotes_API = "https://www.breakingbadapi.com/api/quotes";

export default function Character({
	name,
	img,
	birthday,
	occupation,
	status,
	nickname,
	portrayed,
	appearance,
	char_id
}) {
	const [quotes, setQuotes] = React.useState([]);
	let history = useHistory();

	React.useEffect(() => {
		fetch(quotes_API)
			.then((res) => res.json())
			.then((quotes_data) => {
				setQuotes(quotes_data);
			});
	}, []);



	const fullprof = () => {
		history.push('/profile/' + char_id)
	}


	return (
		<div className="character">
			<img src={img} alt={name} />

			<div className="character-info">
				<h1 className="name"><Link onClick={fullprof} >{name}</Link></h1>
				<hr className="rule" />
				<div >
					<h5 > Occupation: {occupation} </h5>
					<h5 > Date of Birth: {birthday}</h5>
					<h5 > Status: {occupation}</h5>
				</div>
			</div>

		</div>
	);
}
