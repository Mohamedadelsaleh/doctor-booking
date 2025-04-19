import React from 'react';
import { Doctor } from '../../types/doctor';
import styles from './DoctorCard.module.scss';

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: (doctor: Doctor) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBookAppointment }) => {
  return (
    <article className={styles.card} aria-labelledby={`doctor-${doctor.id}-name`}>
      <div className={styles.imageContainer}>
        <img 
          src={doctor.photoUrl} 
          alt={`Portrait of ${doctor.name}`} 
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h3 id={`doctor-${doctor.id}-name`} className={styles.name}>
          {doctor.name}
        </h3>
        <p className={styles.specialty}>{doctor.specialty}</p>
        <div className={styles.rating} aria-label={`Rating: ${doctor.rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < Math.floor(doctor.rating) ? styles.starFilled : styles.star}>
              {i < Math.floor(doctor.rating) ? '★' : '☆'}
            </span>
          ))}
        </div>
        <p className={styles.location}>
          <span className="sr-only">Location:</span> {doctor.location}
        </p>
        <p className={styles.availability}>
          <span className="sr-only">Next available:</span> {doctor.availability[0]}
        </p>
        <button
          onClick={() => onBookAppointment(doctor)}
          className={styles.bookButton}
          aria-label={`Book appointment with ${doctor.name}`}
        >
          Book Appointment
        </button>
      </div>
    </article>
  );
};

export default DoctorCard;