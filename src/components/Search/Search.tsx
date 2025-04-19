import React from 'react';
import styles from './Search.module.scss';

interface SearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        id="doctor-search"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.searchInput}
        placeholder="Search by doctor name..."
        aria-label="Search doctors by name"
      />
    </div>
  );
};

export default Search;