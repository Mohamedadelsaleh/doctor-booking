import React, { useEffect, useState } from 'react';
import { useBookingStore } from './store/bookingStore';
import { mockDoctors, specialties } from './utils/mockData';
import DoctorCard from './components/DoctorCard/DoctorCard';
import Filter from './components/Filter/Filter';
import BookingModal from './components/BookingModal/BookingModal';
import AppointmentsList from './components/AppointmentsList/AppointmentsList';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import styles from './App.module.scss';
import { Appointment, Doctor } from './types/doctor';

const App: React.FC = () => {
  const {
    doctors,
    appointments,
    selectedDoctor,
    isModalOpen,
    setDoctors,
    setSelectedDoctor,
    openModal,
    closeModal,
    addAppointment,
    removeAppointment,
  } = useBookingStore();

  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All Specialties');
  const [activeTab, setActiveTab] = useState<'doctors' | 'appointments'>('doctors');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const doctorsPerPage = 6;

  useEffect(() => {
    setDoctors(mockDoctors);
  }, [setDoctors]);

  const handleBookAppointment = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    openModal();
    setCurrentPage(1);
  };

  const handleConfirmAppointment = (time: string) => {
    if (!selectedDoctor) return;

    const newAppointment: Appointment = {
      id: `appt-${Date.now()}`,
      doctorId: selectedDoctor.id,
      doctorName: selectedDoctor.name,
      specialty: selectedDoctor.specialty,
      location: selectedDoctor.location,
      date: new Date().toLocaleDateString(),
      time: time,
    };

    addAppointment(newAppointment);
  };

  const filteredDoctors = (selectedSpecialty === 'All Specialties'
    ? doctors
    : doctors.filter(doctor => doctor.specialty === selectedSpecialty))
    .filter(doctor => 
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSpecialty, searchTerm]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Healthcare Appointments</h1>
      </header>

      <main className={styles.main} id="main">
        <div className={styles.tabButtons} role="tablist">
          <button
            className={`${styles.tabButton} ${activeTab === 'doctors' ? styles.active : ''}`}
            onClick={() => setActiveTab('doctors')}
            role="tab"
            aria-selected={activeTab === 'doctors'}
            aria-controls="doctors-tab"
          >
            Find Doctors
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'appointments' ? styles.active : ''}`}
            onClick={() => setActiveTab('appointments')}
            role="tab"
            aria-selected={activeTab === 'appointments'}
            aria-controls="appointments-tab"
          >
            My Appointments
          </button>
        </div>

        <div 
          id="doctors-tab" 
          role="tabpanel" 
          aria-labelledby="doctors-tab" 
          hidden={activeTab !== 'doctors'}
        >
          <div className={styles.filterRow}>
            <Filter
              specialties={specialties}
              selectedSpecialty={selectedSpecialty}
              onSpecialtyChange={setSelectedSpecialty}
            />
            <Search
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>

          {filteredDoctors.length === 0 ? (
            <div className={styles.noResults}>
              No doctors found matching your criteria.
            </div>
          ) : (
            <>
              <div className={styles.doctorsGrid}>
                {currentDoctors.map((doctor) => (
                  <DoctorCard
                    key={doctor.id}
                    doctor={doctor}
                    onBookAppointment={handleBookAppointment}
                  />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </div>

        <div 
          id="appointments-tab" 
          role="tabpanel" 
          aria-labelledby="appointments-tab" 
          hidden={activeTab !== 'appointments'}
        >
          <AppointmentsList
            appointments={appointments}
            onCancel={removeAppointment}
          />
        </div>

        <BookingModal
          doctor={selectedDoctor}
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={handleConfirmAppointment}
        />
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Healthcare Appointments</p>
      </footer>
    </div>
  );
};

export default App;