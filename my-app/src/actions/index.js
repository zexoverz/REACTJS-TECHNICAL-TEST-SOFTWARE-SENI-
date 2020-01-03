import axios from "axios";

export const findReposById = (username) => async dispatch => {
    const response = await axios({
        method: "GET",
        url: `http://localhost:3000/repos/${username}`
    })

    let repos = response.data
    dispatch({
        type: "SET_REPOS",
        repos: repos
    })
}