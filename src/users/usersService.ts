import { User } from "./user";

// A post request should not contain an id.
export type UserCreationParams = Pick<User, "name" | "address" | "phoneNumbers">;

export class UsersService {
  public get(id: number, name?: string): User {
    return {
      id,
      email: "jane@doe.com",
      address: "mikälie tie",
      name: name ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    };
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      email: "kalle@email.com",
      ...userCreationParams,
    };
  }
}
