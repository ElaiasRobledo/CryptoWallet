
import store from "@/store/store";
import axios from "axios";

export const apiUTN = axios.create({
	baseURL: 'https://laboratorio3-f36a.restdb.io/rest',
	withCredentials : false,
	
	headers: {'x-apikey': '60eb09146661365596af552f',
	Accept: 'application/json',
	'Access-Control-Allow-Origin' : '*',
	'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE',
	'Content-Type': 'application/json',
	},
	
});
export default{
	
	transaction(purchaseData){
		return apiUTN.post(`/transactions`, purchaseData)
	},
	getHistorial(){
		return apiUTN.get(`/transactions?q={"user_id": "${store.state.id}"}`)
	},
	delete(id){
		return apiUTN.delete(`/transactions/${id}`)
	},
	edit(id){
		return apiUTN.put(`/transactions/${id}`)
	}

}