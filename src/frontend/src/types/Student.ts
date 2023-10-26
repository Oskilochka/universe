enum Gender {
  MALE,
  FEMALE,
  OTHER
}

export type Student = {
  id: number,
  name: string,
  email: string,
  gender: Gender
}
