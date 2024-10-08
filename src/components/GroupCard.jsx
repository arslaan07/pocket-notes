import React from "react";
import { getInitials } from "../utils/getInitials";
import styles from "./GroupCard.module.css";
const GroupCard = ({ group, onClick }) => {
  return (
    <div key={group.id} className={styles.groupCard} onClick={onClick}>
      <div
        style={{
          background: group.color,
        }}
        className={styles.circle}
      >
        <span className={styles.initials}> {group.initials} </span>
      </div>
      {group.name}
    </div>
  );
};

export default GroupCard;
