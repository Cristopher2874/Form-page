// Add your form types here
export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  portfolioUrl?: string;
}

export interface Experience {
  currentRole: string;
  yearsOfExperience: number;
  skills: string;
  actualCompany: string;
  education: string;
  resume?: string;
  achievements?: string;
}

export interface ApplicationForm extends PersonalInfo, Experience {}