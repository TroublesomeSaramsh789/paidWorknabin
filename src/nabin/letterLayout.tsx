import React from 'react'
import userContext from './../contex/userContext';
import { userContexConsumer } from '../contex/userProvider';
import "./letterDesign.scss"

const LetterLayout = () => {
    const data: userContexConsumer = React.useContext(userContext);
    console.log({ ...data.value });
    return (
      <div className="letter-design">
        <p>
          {`उपरोक्त विषयमा अर्जुनचौपारी–१, स्याङ्जा स्थायी ठेगाना भएको उमेर ${data.value.age} वर्षको `}
          {data.value.idType === "citizenship"
            ? "नगरिकता प्रमाणपत्र नं."
            : "जन्म दर्ता प्रमाणपत्रमा रहेको दर्ता नं:"}
          {data.value.idNumber}
          {`, ${data.value.phoneNumber} सम्पर्क नंं. भएको`}
          {data.value.gender == "male" && ` श्री `}
          {data.value.gender == "female" &&
          data.value.relationship == "married"
            ? ` श्रीमती `
            : ` श्री `}
          {`${data.value.name} मिति ${data.value.date} देखि यस भक्तपुर क्यान्सर अस्पतालमा क्यान्सर (${data.value.diseaseName}) रोग निदान भएको भनि अस्पतालहरुको पुर्जी / कागजातहरुको विवरण जाँच बुझ गरी प्रमाणित गर्दछु ।`}
        </p>
      </div>
    );
}

export default LetterLayout