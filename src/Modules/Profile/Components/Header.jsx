export default function HeaderPage({ text }) {
  return (
    <div
      style={{
        backgroundColor: "grey",
        padding: 10,
        marginBottom: 20,
      }}
    >
      <h1>{text}</h1>
    </div>
  );
}
