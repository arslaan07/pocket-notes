import React from "react";
import { getInitials } from "../utils/getInitials";
import styles from "./GroupCard.module.css";
import useWindowWidth from "../hooks/useWindowWidth";
const GroupCard = ({ group, onClick, heading, selectedGroup }) => {
    const windowWidth = useWindowWidth()
    const isSelected = group.id === selectedGroup
  return (
    <div key={group.id} className={heading && windowWidth <= 468? styles.contentGroupCard :
        heading? styles.bigContentGroupCard : styles.groupCard } onClick={onClick}
        style={{
            backgroundColor: !heading 
              ? isSelected ? "#DAE5F5" : "white"
              : "transparent",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px"
          }}
          >
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
