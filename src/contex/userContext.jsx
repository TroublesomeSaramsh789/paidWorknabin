import React from 'react'

const userContext = React.createContext({
  name: "",
  address: {},
  age: 0,
  idNumber: 0,
  idType: idEnum.citizen,
  gender: genderEnum.male,
  date: "",
  phoneNumber: 0,
  relationship: relationshipEnum.single,
  diseaseName: "",
});

export default userContext;