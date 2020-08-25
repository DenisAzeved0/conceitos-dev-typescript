// Campos: title, experience
interface TechObject {
  title: string;
  experience: number;
}

// Campos: name, email, password
interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>; //quando for apenas array de string -> techs: string[];
}

export default function createUser({name, email, password, techs}: CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs
  }

  return user;
}