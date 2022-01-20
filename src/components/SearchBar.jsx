import React, { useState } from "react";
import styles from "./css/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      className={styles.searchBar}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("")
      }}
    >
      <input
        className={styles.bar}
        type="text"
        placeholder="City..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input className={styles.search} type="submit" value="Add City" />
    </form>
  );
}
