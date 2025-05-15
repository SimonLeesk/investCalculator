import InputGroup from "./InputGroup";
import React from 'react';

const [inputValue, setInputValue] = React.useState({
  initialInvestment: 10000, 
  annualInvestment: 1200, 
  expectedReturn: 6, 
  duration: 10
});

const InputFields = [
  { title: "INITIAL INVESTMENT", field: "initialInvestment", default: 10000 },
  { title: "ANNUAL INVESTMENT", field: "annualInvestment", default: 1200 },
  { title: "EXPECTED RETURN", field: "expectedReturn", default: 6 },
  { title: "DURATION", field: "duration", default: 10 },
];

const Labels = ["INITIAL INVESTMENT", "ANNUAL INVESTMENT", "EXPECTED RETURN", "DURATION"];

const handleValue =(newValue, inputIdentifier)=> {
  // setInputValue((prevValue) => (
  //   const updatedValue = {
  //     inputIdentifier: newValue,
  //     ...prevValue
  // }
  // ));
  return updatedValue;
};

export default function UserInput() {
  return (
    <div id="user-input">
      <InputGroup
        label1={Labels[0]}
        input1={InputFields[0].field}
        label2={Labels[1]}
        input2={InputFields[1].field}
      />
      <InputGroup
        label1={Labels[2]}
        input1={InputFields[2].field}
        label2={Labels[3]}
        input2={InputFields[3].field}
      />
    </div>
  );
}
