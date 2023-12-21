import { Patient } from "./Patient";

export interface Exam {
    idExam: string;
    name: string;
    description: string;
    urlLocations: string;
    idPatient?: string;
    patient: Patient;
}
