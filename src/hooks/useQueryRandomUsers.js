import { useEffect, useState } from "react";
import api from "../http";

const defaultParams = {
  page: 1,
  seed: "abc",
};

const useQueryRandomUsers = (searchTerm) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchUsers = async ({ params }) => {
    const response = await api.get("/api", {
      params: {
        results: 3,
        ...params,
      },
    });
    const data = await response.data;
    setUsers(data.results);
  };

  useEffect(() => {
    fetchUsers({ params: defaultParams });
  }, []);

  useEffect(() => {
    searchUsers();
  }, [searchTerm]);

  const fetchByGender = (gender) => {
    if (gender === "all") {
      return fetchUsers({ params: defaultParams });
    }
    fetchUsers({
      params: {
        gender,
      },
    });
  };

  const fetchNextPage = () => {
    setPage(page + 1);
    fetchUsers({
      params: {
        ...defaultParams,
        page: page + 1,
      },
    });
  };

  const fetchPrevPage = () => {
    setPage(page - 1);
    fetchUsers({
      params: {
        ...defaultParams,
        page: page - 1,
      },
    });
  };

  const searchUsers = () => {
    const filteredUsers = users.filter((user) => {
      return (
        user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.name.last.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredUsers(filteredUsers);
  };

  return {
    users,
    fetchByGender,
    fetchNextPage,
    fetchPrevPage,
    page,
    filteredUsers,
  };
};

export default useQueryRandomUsers;
