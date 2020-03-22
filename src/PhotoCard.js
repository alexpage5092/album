import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";
import EditTitle from "./EditTitle";

export default function PhotoCard(props) {
  const [dialog_open, setDialogOpen] = useState(false);
  return (
    <Card style={{ maxWidth: 345, marginRight: 10, marginTop: 10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={props.photo.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              style={{ flexGrow: 1 }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {props.photo.title}
            </Typography>

            <IconButton
              onClick={() => {
                setDialogOpen(true);
              }}
            >
              <CreateIcon />
            </IconButton>
            <EditTitle
              open={dialog_open}
              onClose={() => {
                setDialogOpen(false);
              }}
              user={props.user}
              photo_id={props.photo.id}
              album_id={props.album_id}
            />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
