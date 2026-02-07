import { API_CONFIG } from "../types/index";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body:string
}


export const fetchPost = async () :Promise<Post[]> => {
    const url=`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.POST}`;
    try{
        const response = await fetch (url);
        if(!response.ok){
            throw new Error('Error al obtener los post');
        }
        return await response.json();
    }catch(error){
        console.log(error);
        throw error
        
    }
}  

