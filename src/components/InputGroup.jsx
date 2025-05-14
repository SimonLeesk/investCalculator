import DataInput from "./DataInput";

export default function InputGroup({ label1, input1, label2, input2 }) {
  return (
    <section class="input-group">
      <DataInput title={label1} field={input1} />
      <DataInput title={label2} field={input2} />
    </section>
  );
}
