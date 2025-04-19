import React from 'react';
import styles from './Filter.module.scss';

interface FilterProps {
  specialties: string[];
  selectedSpecialty: string;
  onSpecialtyChange: (specialty: string) => void;
}

const Filter: React.FC<FilterProps> = ({ specialties, selectedSpecialty, onSpecialtyChange }) => {
  return (
    <div className={styles.filterContainer} role="navigation" aria-label="Doctor specialty filter">
      <label htmlFor="specialty-filter" className={styles.filterLabel}>
        Filter by Specialty:
      </label>
      <select
        id="specialty-filter"
        value={selectedSpecialty}
        onChange={(e) => onSpecialtyChange(e.target.value)}
        className={styles.filterSelect}
        aria-label="Select doctor specialty"
      >
        {specialties.map((specialty) => (
          <option key={specialty} value={specialty}>
            {specialty}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;