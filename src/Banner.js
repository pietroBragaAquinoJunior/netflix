import "./Banner.css"
import React from 'react';

function Banner(props) {

    function truncate(string, n) {
        return string?.length > n ? string.substring(0,n-1) + '...' : string;
    }

    return (
        <header className={"banner"} style={
            {   backgroundImage : `url(https://japanologia.files.wordpress.com/2015/04/black-hd-wallpaper.png)`,
                backgroundSize : "cover",
                backgroundPosition : "center"
            }
        }>
            <div className={"banner__contents"}>
                <h1 className={"banner__title"}>Movie Name</h1>
                <div className={"banner__buttons"}>
                    <button className={"banner__button"}>Play</button>
                    <button className={"banner__button"}>My List</button>
                </div>
                <p className={"banner__description"}>
                    {truncate(`
                        This is a text description This is a text description
                        This is a text description This is a text description This is a text description
                        This is a text description This is a text description
                        This is a text description
                        `, 150)}
                </p>
            </div>
            <div className={"banner__fadeBottom"}></div>
        </header>
    );
}

export default Banner;