import { Api } from "./api";

class UserService {
  static async create(user) {
    try {
      const request = await Api.post("/user", user);

      return request.data;
    } catch (error) {
      return error;
    }
  }

  static async update(user) {
    try {
      const request = await Api.post("user/update", user);

      return request.data;
    } catch (error) {
      return error;
    }
  }
}

export default UserService;
