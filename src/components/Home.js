import React, { useState, useEffect } from 'react'
import Character from './Character';

const characters_API = "https://www.breakingbadapi.com/api/characters";
const search_API = "https://www.breakingbadapi.com/api/characters?name=";

export default function Home() {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        fetch(characters_API)
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data);
            });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        if (searchTerm) {
            fetch(search_API + searchTerm)
                .then((res) => res.json())
                .then((data) => {
                    setCharacters(data);
                });

            setSearchTerm("");
        }
    };

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    };


    return (
        <div>
            <header>
                <form onSubmit={submitHandler}>
                    <input
                        className="search"
                        type="search"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleOnChange}
                    />
                </form>
            </header>
            <div className="character-container">
                {characters.length > 0 &&
                    characters.map((character) => (
                        <Character key={character.id} {...character} />
                    ))}
            </div>
        </div>)

}
