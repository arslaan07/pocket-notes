import React from "react";
import { getInitials } from "../utils/getInitials";
import styles from "./GroupCard.module.css";
import useWindowWidth from "../hooks/useWindowWidth";
const GroupCard = ({ group, onClick, heading }) => {
    const windowWidth = useWindowWidth()
  return (
    <div key={group.id} className={heading && windowWidth <= 468? styles.contentGroupCard :
        heading? styles.bigContentGroupCard : styles.groupCard } onClick={onClick}>
      <div
        style={{
          background: group.color,
        }}
        className={heading && windowWidth <= 468? styles.contentCircle : styles.circle}
      >
        <span className={heading && windowWidth <= 468? styles.contentInitials : styles.initials}> {group.initials} </span>
      </div>
      {group.name}
    </div>
  );
};

export default GroupCard;
