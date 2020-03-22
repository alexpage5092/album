import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { db } from "./firebase";

export default function EditTitle(props) {
  const [updated_title, setTitle] = useState("");

  const handleUpdateName = () => {
    console.log(props);
    db.collection("users")
      .doc(props.user.uid)
      .collection("albums")
      .doc(props.album_id)
      .collection("photos")
      .doc(props.photo_id)
      .update({ title: updated_title })
      .then(() => {
        setTitle("");
        props.onClose();
      });
  };

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Enter a New Title for this Photo</DialogTitle>
      <DialogContent>
        <TextField
          label="New Photo Title"
          fullWidth
          value={updated_title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        ></TextField>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={props.onClose}>
          Cancel
        </Button>
        <Button color="primary" variant="contained" onClick={handleUpdateName}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
