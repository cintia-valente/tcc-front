import { Exam } from "./Exam";

export interface Patient {
    idPatient: string;
    name: string;
    age: number;
    gender: string;
    examList?: Exam[];
  }
  