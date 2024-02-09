import axios from "axios";
export default axios.create({
baseURL:'https://api.rawg.io/api',
params:{
    key:'8a277f7fd56f487383af6da2a548fffb'
}
})