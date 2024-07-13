import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "../index.css";
import { Card, Text, Group, Center, rem, useMantineTheme, BackgroundImage } from '@mantine/core';
import classes from './ImageCard.module.css';
import { Grid, Skeleton, Container } from '@mantine/core';



function Movies({ id, coverImg, url, title, rating, summary, genres }) {
  return (
    <Grid 
            className="grid items-center justify-center w-fit p-8"
          >
      <Grid.Col 
        className="w-fit"
        span={4}
      >    
        <Card p="lg"
          shadow="lg"
          className={classes.card}
          radius="md"
        >
          <div 
            className={classes.image}
            style={{backgroundImage: `url(${coverImg})`,}}
          />
          <div className={classes.overlay} />

          <div className={classes.content}> 
            <Text size="lg" className={classes.title} fw={500} color="white" >
              <Link to={`/movie/${id}`}  >
                {title} 
              </Link>
            </Text>
            <p className="text-sm text-gray-400 font-bold">({rating})</p>
            <p className="text-sm text-gray-400">{summary.length > 240 ? `${summary.slice(0, 240)} ...` : summary}</p>
            <ul>
              {genres.map((g) => (
                <li className="text-sm font-bold text-gray-500" key={g} >{g}</li>
              ))}
            </ul>
          </div>
        </Card>
      </Grid.Col>
      </Grid>
  );
}

Movies.propTypes = {
  coverImg: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;
