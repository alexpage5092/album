import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import PhotoCard from "./PhotoCard";
import AddPhoto from "./AddPhoto";
import { db, snapshotToArray } from "./firebase";

export default function Photos(props) {
  const [dialog_open, setDialogOpen] = useState(false);
  const [photos, setPhotos] = useState([
    {
      id: 0,
      title: "Mountain",
      image:
        "https://images.pexels.com/photos/1154619/pexels-photo-1154619.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id: 1,
      title: "River",
      image:
        "https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id: 2,
      title: "Land",
      image:
        "https://images.pexels.com/photos/3309268/pexels-photo-3309268.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }
  ]);

  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .doc(props.user.uid)
      .collection("albums")
      .doc(props.match.params.album_id)
      .collection("photos")
      .onSnapshot(snapshot => {
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
        return <PhotoCard photo={p} />;
      })}

      <div>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginTop: 10 }}
          onClick={() => {
            setDialogOpen(true);
          }}
        >
          Add Photo
        </Button>
      </div>
      <AddPhoto
        open={dialog_open}
        onClose={() => {
          setDialogOpen(false);
        }}
        user={props.user}
        album_id={props.match.params.album_id}
      />
    </div>
  );
}
