export interface Location {
  street: string;
  city: string;
  state: string;
  zip: number;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  cell: string;
  dob: number;
  email: string;
  gender: string;
  location: Location;
  md5: string;
  name: Name;
  password: string;
  phone: string;
  picture: Picture;
  registered: number;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
}

export interface UserResponse {
  results:  { user: User }[];
  nationality: string;
  seed: string;
  version: string;
}
