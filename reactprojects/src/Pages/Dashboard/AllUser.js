import React from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:9000/users");
      const data = await res.json();
      return data;
    }
  });
  const handleAdmin = (id) => {
    // console.log(id);
    const url = `http://localhost:9000/users/admin/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("access-token")}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Admin Made Succesfull");
          refetch();
        }
      });
  };
  return (
    <div>
      <h1>All Users;{users.length}</h1>
      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <thead>
            <tr>
              <th>Id</th>
              {console.log(users)}
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>

                <td>{user.email}</td>
                <td>
                  {" "}
                  {user?.role !== "admin" && (
                    <button onClick={() => handleAdmin(user._id)}>
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
