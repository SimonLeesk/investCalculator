function Header() {
  return (
    <div id="header">
      <img
        src="/src/assets/investment-calculator-log.png"
        alt="Calculator Image"
      />
      <h1> Investment Calculator </h1>
    </div>
  );
}

function UserInput() {
  return (
    <div id="user-input">
      <section class="input-group">
        <TextInput title="INITIAL INVESTMENT" field="initialInvestment" />
        <TextInput title="ANNUAL INVESTMENT" field="annualInvestment" />
      </section>
      <section class="input-group">
        <TextInput title="EXPECTED RETURN" field="expectedReturn" />
        <div>
          <label>DURATION</label>
          <input type="number" name="duration" /> 
        </div>
      </section>
    </div>
  );
}

function TextInput({ title, field }) {
  return (
    <div>
      <label>{title}</label>
      <input name={field} />
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