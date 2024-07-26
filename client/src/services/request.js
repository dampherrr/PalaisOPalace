import axios from "axios"

export default function getGrotte () {
    return axios
    .get("https://docs.google.com/spreadsheets/d/e/2PACX-1vRKP3lWtmIdPVdzTnMDwTQzU75QrfQ6wJ4X265R1lf7XmDlOYDKz4l6BUOK-EYkE8KJnW2rY8sCCaNw/pub?output=csv")
    .then((response) => response.data)
    .catch((error) => console.error(error))
}




