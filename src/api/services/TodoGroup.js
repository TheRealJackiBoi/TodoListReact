
import axios from 'axios';

export async function getTodoGroups() {
    try {
        const response = await axios.get('/todo-groups');
        return response.data;
    }
    catch (e) {
        console.log(e);
    }
}