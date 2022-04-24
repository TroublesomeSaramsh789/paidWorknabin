import React from "react";
import { userContexConsumer } from "../contex/userProvider";
import userContext from "../contex/userContext";

const UserForm = () => {
  const data: userContexConsumer = React.useContext(userContext);
  console.log({ ...data.value });

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="user-form-page">
      <h2>User Input Form</h2>
      <form className="user-input-form" onSubmit={(e) => submitHandler(e)}>
        <div className="formItem">
          <label>Name:</label>
          <input
            onChange={(e) => data.controllers.nameHandler(e.target.value)}
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="formItem">
          <label>Age:</label>
          <input
            onChange={(e) => data.controllers.ageHandler(e.target.value)}
            type="number"
            max={150}
            name=""
            id=""
          />
        </div>
        <div className="formItem">
          <label>Gender:</label>
          <select
            onChange={(e) => data.controllers.genderHandler(e.target.value)}
            className="formItem"
          >
            <option value="married">Male</option>
            <option value="single">Female</option>
          </select>
        </div>
        <div className="formItem">
          <label>Phone No:</label>
          <input
            onChange={(e) => data.controllers.phoneNumberHandler(e.target.value)}
            type="number"
            maxLength={10}
            minLength={10}
            name=""
            id=""
          />
        </div>
        <div className="formItem">
          <label>Relationship:</label>
          <select
            onChange={(e) =>
              data.controllers.relationshipHandler(e.target.value)
            }
            className="formItem"
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>
        <div className="formItem">
          <label>Id Type:</label>
          <select
            onChange={(e) => data.controllers.idTypeHandler(e.target.value)}
            className="formItem"
          >
            <option value="citizenship">Citizenship</option>
            <option value="birthCertificate">Birth Certificate</option>
          </select>
        </div>
        <div className="formItem">
          <label>Id Number:</label>
          <input
            onChange={(e) => data.controllers.idNumberHandler(e.target.value)}
            type="number"
            max={150}
            name=""
            id=""
          />
        </div>

        <div className="formItem">
          <label>Disease Name:</label>
          <input
            onChange={(e) =>
              data.controllers.diseaseNameHandler(e.target.value)
            }
            type="text"
            name=""
            id=""
          />
        </div>

        <div className="formItem">
          <label>Date:</label>
          <input
            onChange={(e) => data.controllers.dateHandler(e.target.value)}
            type="date"
            name=""
            id=""
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
