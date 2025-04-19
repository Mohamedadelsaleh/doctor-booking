import { create } from 'zustand';
import { Doctor, Appointment } from '../types/doctor';

interface BookingState {
  doctors: Doctor[];
  appointments: Appointment[];
  selectedDoctor: Doctor | null;
  isModalOpen: boolean;
  setDoctors: (doctors: Doctor[]) => void;
  setSelectedDoctor: (doctor: Doctor) => void;
  openModal: () => void;
  closeModal: () => void;
  addAppointment: (appointment: Appointment) => void;
  removeAppointment: (id: string) => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  doctors: [],
  appointments: [],
  selectedDoctor: null,
  isModalOpen: false,
  setDoctors: (doctors) => set({ doctors }),
  setSelectedDoctor: (doctor) => set({ selectedDoctor: doctor }),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  addAppointment: (appointment) => 
    set((state) => ({ appointments: [...state.appointments, appointment] })),
  removeAppointment: (id) => 
    set((state) => ({ 
      appointments: state.appointments.filter(app => app.id !== id) 
    })),
}));