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

export interface Service {
  __v: number;
  _id: string;
  category: string;
  createdAt: Date;
  currency: string;
  image?: any;
  description: string;
  liked: boolean;
  owner: string;
  price: number;
  subtitle: string;
  title: string;
  updatedAt?: Date;
  images: string[];
}

export interface UpdateServiceDto extends Pick<Service, 'liked'> {}
