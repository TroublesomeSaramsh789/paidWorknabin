import UserContext from "./userContext";

import React from "react";


export enum idEnum {
  citizen = "citizenship",
  birth = "birthCertificate",
}
export enum genderEnum {
  male = "male",
  female = "female",
  other = "other",
}
export enum relationshipEnum {
  married = "married",
  single = "single",
}
interface userdataType {
  name: string;
  address: {};
  age: number;
  idNumber: number;
  idType: idEnum;
  gender: genderEnum;
  date: string;
  phoneNumber: number;
  relationship: relationshipEnum;
  diseaseName: string;
}

const userProvider = ({ children }) => {
  const [state, setState] = React.useState<userdataType>({
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

  const nameHandler = (value: string) => {
    const newState = { ...state };
    newState.name = value;
    setState(newState);
  };
  const ageHandler = (value: number) => {
    const newState = { ...state };
    newState.age = value;
    setState(newState);
  };
  const idNumberHandler = (value: number) => {
    const newState = { ...state };
    newState.idNumber = value;
    setState(newState);
  };
  const idTypeHandler = (value: idEnum) => {
    const newState = { ...state };
    newState.idType = value;
    setState(newState);
  };
  const genderHandler = (value: genderEnum) => {
    const newState = { ...state };
    newState.gender = value;
    setState(newState);
  };
  const dateHandler = (value: string) => {
    const newState = { ...state };
    newState.date = value;
    setState(newState);
  };
  const phoneNumberHandler = (value: number) => {
    const newState = { ...state };
    newState.phoneNumber = value;
    setState(newState);
  };
  const relationshipHandler = (value: relationshipEnum) => {
    const newState = { ...state };
    newState.relationship = value;
    setState(newState);
  };
  const diseaseNameHandler = (value: string) => {
    const newState = { ...state };
    newState.diseaseName = value;
    setState(newState);
  };
  return (
    <UserContext.Provider
      value={{
        value: state,
        controllers: {
          nameHandler,
          ageHandler,
          idNumberHandler,
          idTypeHandler,
          genderHandler,
          dateHandler,
          phoneNumberHandler,
          relationshipHandler,
          diseaseNameHandler,
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default userProvider;

export interface userContexConsumer {
  value: {
    name: string;
    // address: {};
    age: number;
    idNumber: number;
    idType: idEnum;
    gender: genderEnum;
    date: string;
    phoneNumber: number;
    relationship: relationshipEnum;
    diseaseName: string;
  };
  controllers: {
    nameHandler: (a) => void;
    ageHandler: (a) => void;
    idNumberHandler: (a) => void;
    idTypeHandler: (a) => void;
    genderHandler: (a) => void;
    dateHandler: (a) => void;
    phoneNumberHandler: (a) => void;
    relationshipHandler: (a) => void;
    diseaseNameHandler: (a) => void;
  };
}