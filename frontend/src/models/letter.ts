class Letter {
  id: string;
  name: string;
  password: string;
  message: string;

  constructor(name: string, password: string, message: string) {
    this.id = new Date().toISOString();
    this.name = name;
    this.password = password;
    this.message = message;
  }
}

export default Letter;
