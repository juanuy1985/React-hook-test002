import "./styles.css";
import React, { useEffect, useState } from "react";
import { getRandomUsers } from "./services/RandomUserServices";
import UserForm from "./components/UserForm";
import UserRow from "./components/UserRow";
import UserProps from "./components/UserProps";

export default function App() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState(new Array<UserProps>());
  const [pageSize, setPageSize] = useState(5);
  const [isTableView, setIsTableView] = useState(false);

  useEffect(() => {
    getRandomUsers(pageSize, page).then((users) => {
      setUsers(users);
    });
  }, [page, pageSize]);

  const onNext = () => {
    setPage(page + 1);
  };

  const onPrev = () => {
    setPage(page - 1);
  };

  const onPageSizeChange = (value: string) => {
    const size = Number(value);
    if (!isNaN(size)) {
      setPageSize(size);
    }
  };

  const onIsTableViewChecked = (value: boolean) => {
    setIsTableView(value);
  };

  let listOfUsers = null;
  if (!isTableView) {
    listOfUsers = (
      <div>
        {users.map((user) => (
          <UserForm key={user.name} userProps={user} />
        ))}
      </div>
    );
  } else {
    listOfUsers = (
      <table border="1">
        <tbody>
          {users.map((user, index) => (
            <UserRow key={`${user.name}-${index}`} userProps={user} />
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div className="App">
      <p>
        <input
          type="checkbox"
          checked={isTableView}
          onChange={(e) => {
            onIsTableViewChecked(e.target.checked);
          }}
        ></input>
        Page Size:{" "}
        <input
          value={pageSize}
          onChange={(e) => onPageSizeChange(e.target.value)}
        ></input>
      </p>
      {listOfUsers}
      <br />
      <button onClick={onNext}>Prev</button>{" "}
      <button onClick={onPrev}>Next</button>
    </div>
  );
}
