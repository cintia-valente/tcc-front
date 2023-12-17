import { Exam } from "./Exam";

export interface Patient {
    idPatient: string;
    name: string;
    age: number;
    gender: Gender;
    examList?: Exam[];
  }
  
  export enum Gender {
    Femino = 'F',
    Masculino = 'M'
  }