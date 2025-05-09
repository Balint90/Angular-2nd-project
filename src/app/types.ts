import { DUMMY_USERS } from "./dummy-users"

// typeof DUMMY_USERS[0];
// export type User = { //U can define other types
//     id: string;
//     name: string;
//     avatar: string;
// };

export interface User { //U can define only object types
    id: string;
    name: string;
    avatar: string;
}