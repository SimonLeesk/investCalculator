import InputGroup from "./InputGroup";

const InputFields = [
  { title: "INITIAL INVESTMENT", field: "initialInvestment" },
  { title: "ANNUAL INVESTMENT", field: "annualInvestment" },
  { title: "EXPECTED RETURN", field: "expectedReturn" },
  { title: "DURATION", field: "duration" },
];

export default function UserInput() {
  return (
    <div id="user-input">
      <InputGroup
        label1={InputFields[0].title}
        input1={InputFields[0].field}
        label2={InputFields[1].title}
        input2={InputFields[1].field}
      />
      <InputGroup
        label1={InputFields[2].title}
        input1={InputFields[2].field}
        label2={InputFields[3].title}
        input2={InputFields[3].field}
      />
    </div>
  );
}
