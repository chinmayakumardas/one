import Link from 'next/link';
const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <Link href="/admin/users">Manage Users</Link>
        <Link href="/admin/posts">Manage Posts</Link>
        <Link href="/admin/settings">Settings</Link>
        <Link href="/admin/roles">Manage Roles</Link>
      </nav>
    </div>
  );
};

export default AdminDashboard;
