
export interface Post {
    userId: number;
    id: number;
    title: string;
    body:string
}

export const API_CONFIG={
    BASE_URL:`${import.meta.env.VITE_URL}`,
    ENDPOINTS:{
        POST:"/post",
    }
}