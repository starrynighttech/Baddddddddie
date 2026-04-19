import React, { useEffect, useState } from "react"

export default function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/admin/users")
      .then(r => r.json())
      .then(setUsers)
  }, [])

  return (
    <div>
      <h1>Admin Dashboard</h1>

      {users.map(u => (
        <div key={u._id}>
          {u.email} - ${u.balance}
        </div>
      ))}
    </div>
  )
}
