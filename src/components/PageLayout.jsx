export default function PageLayout({ title, children }) {
  return (
    <div className="page">
      <h1 className="page-title">{title}</h1>
      <div className="page-content">{children}</div>
    </div>
  );
}
