import "./App.css";
import LeftColumn from "./Components/LeftColumn";
import RightColumn from "./Components/RightColumn";
import useQueryRandomUsers from "./hooks/useQueryRandomUsers";
import useSearch from "./hooks/useSearch";

function App() {
  const { value, handleChange } = useSearch();

  const {
    users,
    fetchByGender,
    fetchNextPage,
    fetchPrevPage,
    page,
    filteredUsers,
  } = useQueryRandomUsers(value);

  const usersData = value ? filteredUsers : users;
  return (
    <div className="App xl:px-10">
      <div className="block xl:grid xl:grid-cols-12 xl:gap-x-6">
        <div className="md:col-span-6 px-24 xl:px-0 pt-52 lg:pt-0">
          <LeftColumn
            fetchByGender={fetchByGender}
            searchUsers={handleChange}
            value={value}
          />
        </div>
        <div className="md:col-span-6">
          <RightColumn
            users={usersData}
            page={page}
            fetchNextPage={fetchNextPage}
            fetchPrevPage={fetchPrevPage}
            searchUsers={handleChange}
            value={value}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
