import axios from "axios";

const instance =axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "7f55a56964d03498bfa67a27ce24fd60",
        lanuage: "ko-KR",
    }
});

export default instance;