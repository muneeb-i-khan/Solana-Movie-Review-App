import { Card } from './Card'
import { FC, useEffect, useState } from 'react'
import { Movie } from '../models/Movie'
import { Button, styled, StylesProvider } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
const MOVIE_REVIEW_PROGRAM_ID = 'CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN'

export const MovieList: FC = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        setMovies(Movie.mocks)
    }, [])
    
    return (
        <div className={styles.below}>
            {
                movies.map((movie, i) => {
                    return (
                        <Card key={i} movie={movie} />
                    )
                })
            }
        </div>
    )
}