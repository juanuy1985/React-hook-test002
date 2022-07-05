import UserProps from "./UserProps";

const UserRow = ({ userProps }: { userProps: UserProps }) => {
  return (
    <tr>
      <td>{userProps.name}</td>
      <td>{userProps.gender}</td>
      <td>{userProps.email}</td>
      <td>
        <img
          src={userProps.picture?.thumbnail}
          alt={`for ${userProps.name}`}
        ></img>
      </td>
    </tr>
  );
};

export default UserRow;
