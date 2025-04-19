import React, { useState } from 'react';
import { Doctor } from '../../types/doctor';
import styles from './BookingModal.module.scss';

interface BookingModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (time: string) => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ doctor, isOpen, onClose, onConfirm }) => {
  const [selectedTime, setSelectedTime] = useState<string>('');

  if (!isOpen || !doctor) return null;

  const handleConfirm = () => {
    if (selectedTime) {
      onConfirm(selectedTime);
      setSelectedTime('');
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className={styles.modalContent}>
        <button 
          onClick={onClose} 
          className={styles.closeButton}
          aria-label="Close booking modal"
        >
          &times;
        </button>
        
        <h2 id="modal-title" className={styles.modalTitle}>
          Book Appointment with {doctor.name}
        </h2>
        
        <p className={styles.specialty}>{doctor.specialty}</p>
        
        <div className={styles.timeSlots}>
          <h3 className={styles.timeSlotsTitle}>Available Time Slots</h3>
          <div className={styles.slotGrid} role="radiogroup" aria-labelledby="time-slots-label">
            {doctor.availability.map((time) => (
              <div key={time} className={styles.slotContainer}>
                <input
                  type="radio"
                  id={`time-${time}`}
                  name="timeSlot"
                  value={time}
                  checked={selectedTime === time}
                  onChange={() => setSelectedTime(time)}
                  className={styles.radioInput}
                />
                <label
                  htmlFor={`time-${time}`}
                  className={`${styles.timeSlot} ${selectedTime === time ? styles.selected : ''}`}
                >
                  {time}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={handleConfirm}
          disabled={!selectedTime}
          className={styles.confirmButton}
          aria-disabled={!selectedTime}
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
};

export default BookingModal;