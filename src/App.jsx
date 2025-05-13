import Header from "./components/Header";

const InputFields = [
  { title: "INITIAL INVESTMENT", field: "initialInvestment" },
  { title: "ANNUAL INVESTMENT", field: "annualInvestment" },
  { title: "EXPECTED RETURN", field: "expectedReturn" },
  { title: "DURATION", field: "duration" },
];

function UserInput() {
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
function InputGroup({ label1, input1, label2, input2 }) {
  return (
    <section class="input-group">
      <DataInput title={label1} field={input1} />
      <DataInput title={label2} field={input2} />
    </section>
  );
}

function DataInput({ title, field }) {
  return (
    <div>
      <label>{title}</label>
      <input type="number" name={field} />
    </div>
  );
}

function App() {
  return (
    <body>
      <Header />
      <UserInput />
    </body>
  );
}

export default App;
