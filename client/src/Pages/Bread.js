import React, { useContext } from "react";
import { AppContext } from "../Context/Datacontext";
import data from "../datas.json";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    paddingLeft: "40px",
  },
  root: {
    maxWidth: 300,
    marginBottom: theme.spacing(6),
  },
  media: {
    height: 250,
  },
}));
const Bread = () => {
  const { addProduct, cartItems, increase } = useContext(AppContext);
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.card}>
        {data
          .filter((products) => products.category === "bread")
          .map((item) => {
            const alreadyPresent = cartItems.find(
              (product) => product.id === item.id
            );
            return (
              <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      title={item.name}
                      alt={item.name}
                      image={item.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {item.name}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        Rs.{item.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      onClick={() => {
                        alreadyPresent ? increase(item) : addProduct(item);
                      }}
                    >
                      Add to cart
                    </Button>
                    <Button size="small" color="primary" variant="contained">
                      Buy Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Bread;
