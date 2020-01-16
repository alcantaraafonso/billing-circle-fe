import axios from 'axios'

import urls from '../common/config/urls'

export function getSummary() {
    const request = axios.get(`${urls.BASE_URL}/billingCircle/summary`)
    return { type: 'GET_SUMMARY', payload: request }
}