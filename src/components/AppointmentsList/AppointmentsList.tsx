import React from 'react';
import { Appointment } from '../../types/doctor';
import styles from './AppointmentsList.module.scss';

interface AppointmentsListProps {
  appointments: Appointment[];
  onCancel: (id: string) => void;
}

const AppointmentsList: React.FC<AppointmentsListProps> = ({ appointments, onCancel }) => {
  if (appointments.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>You don't have any upcoming appointments.</p>
      </div>
    );
  }

  return (
    <div className={styles.listContainer} role="region" aria-labelledby="appointments-heading">
      <h2 id="appointments-heading" className={styles.heading}>
        My Appointments
      </h2>
      <ul className={styles.list}>
        {appointments.map((appointment) => (
          <li key={appointment.id} className={styles.listItem}>
            <div className={styles.appointmentInfo}>
              <h3 className={styles.doctorName}>{appointment.doctorName}</h3>
              <p className={styles.specialty}>{appointment.specialty}</p>
              <p className={styles.dateTime}>
                {appointment.date} at {appointment.time}
              </p>
              <p className={styles.location}>{appointment.location}</p>
            </div>
            <button
              onClick={() => onCancel(appointment.id)}
              className={styles.cancelButton}
              aria-label={`Cancel appointment with ${appointment.doctorName}`}
            >
              Cancel
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentsList;