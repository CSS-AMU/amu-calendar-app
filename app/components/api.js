import axios from 'axios'
export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'https://api.amu.ac.in/api/v1/amu-news?lang=en&year=2012&month=10',
        'headers': {
            'content-type':'application/octet-stream',
            'x-rapidapi-host':'example.com',
            'x-rapidapi-key': process.env.RAPIDAPI_KEY
        },
        'params': {
            'search':'parameter',
        },
    })
}