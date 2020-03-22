import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import PhotoCard from "./PhotoCard";
import AddPhoto from "./AddPhoto";
import { db, snapshotToArray } from "./firebase";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default function Public(props) {
  const [dialog_open, setDialogOpen] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collectionGroup("photos").onSnapshot(snapshot => {
      const updated_photos = snapshotToArray(snapshot);
      setPhotos(updated_photos);
    });
    return unsubscribe;
  }, [props]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        paddingLeft: 10,
        paddingTop: 10
      }}
    >
      {photos.map(p => {
        return <PhotoCard photo={p} key={p.id} editButton={false} />;
      })}
    </div>
  );
}
