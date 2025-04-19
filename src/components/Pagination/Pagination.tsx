import React from 'react';
import styles from './Pagination.module.scss';
import Previous from '../../assets/left.svg';
import Next from '../../assets/right.svg';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination} aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.paginationButton}
        aria-label="Previous page"
      >
        <img src={Previous} alt="Previous" className={styles.arrowIcon} loading='lazy' />
        <span>Previous</span>
      </button>
      
      <span className={styles.pageInfo}>
        Page {currentPage} of {totalPages}
      </span>
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.paginationButton}
        aria-label="Next page"
      >
        <span>Next</span>
        <img src={Next} alt="next" className={styles.arrowIcon} loading='lazy' />
      </button>
    </div>
  );
};

export default Pagination;