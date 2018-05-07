
import axios from 'axios'
import {
    CHANGE_USERNAME
} from './const'
export default {
    login (username,password) {
    	
    	return dispatch => {
    		
    		setTimeout(() => {
    			
    			dispatch({
    				type: CHANGE_USERNAME,
    				username: '二狗子'
    			})
    			
    		},1000)
    		
    	}
    	
    }
}