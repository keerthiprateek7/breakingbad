import React from 'react'
import { useHistory } from 'react-router-dom';

const profile_API = "https://www.breakingbadapi.com/api/characters/"
const quotes_API = "https://www.breakingbadapi.com/api/quotes";

export default function Profile(props) {

    const [chardata, setChardata] = React.useState()
    const [quotes, setQuotes] = React.useState([]);
    let history = useHistory();

    React.useEffect(() => {
        fetch(profile_API + props.match.params.id)
            .then((res) => res.json())
            .then((data) => {
                setChardata(data);
            });
    }, [props.match.params.id]);

    React.useEffect(() => {
        fetch(quotes_API)
            .then((res) => res.json())
            .then((quotes_data) => {
                setQuotes(quotes_data);
            });
    }, []);



    return (
        <div>
            <button onClick={() => { history.push('/') }}> Back.. </button>
            {chardata !== undefined ? chardata.map((rec) => {
                console.log(rec)
                return (
                    <div >
                        <img src={rec.img} alt={rec.img} />
                        <h4>Date of Birth: {rec.birthday}</h4>
                        <h4>Occupation: {rec.occupation}</h4>
                        <h4>Status: {rec.status}</h4>
                        <h4>Nickname: {rec.nickname}</h4>
                        <h4>Portrayed Character: {rec.portrayed}</h4>
                        <h4 >Seasons appeared: {rec.appearance.map((r) => {
                            return (<span >{r}, </span>)
                        })}</h4>
                        <h4> Quotes:</h4>
                        {quotes &&
                            quotes.map((quote, index) => {
                                return (
                                    quote.author === rec.name && <p key={quote.quote_id}> {quote.quote}</p>
                                );
                            })}

                    </div>)
            }) : ""}
        </div>
    )
}