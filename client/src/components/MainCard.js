import React from 'react';
import Card from './Card';
import CardContent from './CardContent'
import Title from './Title'
import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'

const MainCard = ({ car }) => {
    return(
        <Card>
            <CardContent>
                <h4>Type: {car.make}</h4>
                <LikeButton>Like:</LikeButton>
                <Title><Link to={`/cars/${car.id}`}>View Car</Link></Title>
            </CardContent>
        </Card>
    )
}

export default MainCard