export default function Account() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h2>Account Info</h2>
      <p>Email: {user?.email}</p>
      <p>Subscription Plan: Premium</p>
    </div>
  );
}
