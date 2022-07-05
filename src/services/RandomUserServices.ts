import axios from "axios";
import UserProps from "../components/UserProps";

const GET_RANDOM_USER_URL = "https://randomuser.me/api";

type RandomUserResponse = {
  data: {
    results: Array<{
      gender: string;
      email: string;
      name: {
        title: string;
        first: string;
        last: string;
      };
      picture: {
        large: string;
        medium: string;
        thumbnail: string;
      };
    }>;
  };
};

export function getRandomUsers(results: number, page: number = 0) {
  const extraData = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios
    .get(`${GET_RANDOM_USER_URL}?results=${results}&page=${page}`, extraData)
    .then((response: RandomUserResponse) => {
      const { data } = response;
      return data.results.map((user) => ({
        gender: user.gender,
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        email: user.email,
        picture: user.picture
      }));
    })
    .catch((error) => {
      console.error(JSON.stringify(error));
      return [];
    });
}
