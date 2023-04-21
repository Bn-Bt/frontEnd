import { fetchUser } from '../utils/fetchLocalStorageData';

const userInfo = fetchUser();

export const INITIAL_STATE = {
    user: userInfo,
    foodItems:null
};

