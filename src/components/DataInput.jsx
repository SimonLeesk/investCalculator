export default function DataInput({ title, field }) {
  return (
    <div>
      <label>{title}</label>
      <input type="number" name={field} />
    </div>
  );
}
