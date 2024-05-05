import React from "react";
import './Header.css'
import pokeball from '../../assets/Pokeball.png'

const Header = ({inputText, handleChange, handleSubmit}) => {
    return (
    <header className="header">
        <img className="pokeball-image" src={pokeball} alt="pokeball"/>
        <div className="search-main-div">
            <div className="label-div">
                <label className="label">Who are you looking for?</label>
            </div>
            <div className="search-div">
                <svg
                    className="search-image" viewBox="0 0 50 50">
                    <path
                        d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path>
                </svg>
                <input className="search-input" placeholder="E.g. Pikachu" value={inputText} onChange={handleChange}/>
                <button className="search-button" onClick={handleSubmit}>GO</button>
            </div>
        </div>
    </header>
    );
}

export default Header;