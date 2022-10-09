import axios from 'axios';

const URL = "https://api.github.com/users"

export const getUserByName = async (name: string) => {
    const res = await axios.get(`${URL}/${name}`)
    return res;
}