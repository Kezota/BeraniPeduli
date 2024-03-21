export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="btn"
      style={{ padding: "17px 32px", borderRadius: "15px", marginTop: "30px" }}
    >
      {children}
    </button>
  );
}
