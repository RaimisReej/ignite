import React from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { smallImage } from "../util";
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import apple from '../img/apple.svg'
import nintendo from '../img/nintendo.svg'
import xbox from '../img/xbox.svg'
import gamepad from '../img/gamepad.svg'
//stars
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'

const GameDetail = ({pathId}) => {
    const navigate = useNavigate();
    //exit detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains("shadow")){
            document.body.style.overflow = 'auto'
            navigate('/');
        }
        console.log(element)
}
//get rating stars
const getStars = () =>{
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
     if( i<= rating ){
        stars.push(<img alt="star" key={i} src={starFull}></img>)
     } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>)
     }
    }
    return stars;
}

//get platform images/icons
const getPlatform = (platform) => {
    switch(platform){
        case "PlayStation 4":
            return playstation;
        case "Xbox One":
            return xbox;
        case "PC":
            return steam;
        case "Nintendo Switch":
            return nintendo;
        case "IOS":
            return apple;
        default:
            return gamepad;

    }
}

    //Data
const { screen, game, isLoading} = useSelector((state) => state.details);
    return (
        <>
        {!isLoading && (

        
        <CardShadow className="shadow" onClick={exitDetailHandler}>
            <Detail layoutId={pathId}>
                <Stats>
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                        {getStars()}
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {game.platforms.map(data => (
                                <img key={data.platform.id} src={getPlatform(data.platform.name)}/>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img  layoutId={`image ${pathId}`} src={smallImage(game.background_image,1280 )} alt="image" />
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results.map(screen => (
                        <img src={screen.image} key={screen.id} alt='game'/>
                    ))}
                </div>
            </Detail>
        </CardShadow>
        )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: lightgreen;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 3rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img {
        width: 100%;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 2rem;
        height: 2rem;
        display: inline;
    }
`
const Info = styled(motion.div)`
    text-align: center;    
`
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`
const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width:100%;
    }
`
const Description = styled(motion.div)`
    margin: 3rem 0rem;
`


export default GameDetail;