export interface RegisterProps {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface ProfileDto {
  _id: string;
  createdAt: Date;
  email: string;
  fullName: string;
  projects: any[];
  registerType: string;
  role: string;
  updatedAt: Date;
}

export interface UpdateProfileDto
  extends Pick<ProfileDto, '_id' | 'fullName' | 'email'> {}
