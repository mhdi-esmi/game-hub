import axios from "axios";
export default axios.create({
baseURL:'https://api.rawg.io/api',
params:{
    key:'81f5d975f6e74002aa813cec10b5c25a'
}
})