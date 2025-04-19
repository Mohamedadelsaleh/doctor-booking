export interface Doctor {
    id: string;
    name: string;
    specialty: string;
    rating: number;
    location: string;
    availability: string[];
    photoUrl: string;
  }
  
  export interface Appointment {
    id: string;
    doctorId: string;
    doctorName: string;
    specialty: string;
    location: string;
    date: string;
    time: string;
  }