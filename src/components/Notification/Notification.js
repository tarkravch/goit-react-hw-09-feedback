import React from "react";
import PropTypes from "prop-types";
import styles from "../Notification/Notification.module.css";

const Notification = ({ message }) => (
  <>{<p className={styles.item}>{message}</p>}</>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
