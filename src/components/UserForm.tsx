import UserProps from "./UserProps";

const UserForm = ({ userProps }: { userProps: UserProps }) => {
  return (
    <div>
      <h1>{userProps.name}</h1>
      <h2>{userProps.gender}</h2>
      <b>
        <h2>{userProps.email}</h2>
      </b>
      <img src={userProps.picture?.large} alt={`for ${userProps.name}`}></img>
      <hr />
    </div>
  );
};

export default UserForm;
