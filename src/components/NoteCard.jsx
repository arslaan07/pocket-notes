import React from "react";
import styles from "./NoteCard.module.css";
const NoteCard = ({ note }) => {
  return (
    <div className={styles.noteCard} key={note.nId}>
      {note.note}
      <div className={styles.date}>
        <div style={{ marginRight: "30px" }}> {note.date} </div>
        <ul>
          <li> {note.time}</li>
        </ul>
      </div>
    </div>
  );
};

export default NoteCard;
