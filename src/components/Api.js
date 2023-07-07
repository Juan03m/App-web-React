import axios from 'axios';

export const PeticionGET = async (url, setMensaje, setData, parametros = {}) => {
    
    try {
        const { data } = await axios.get(url, {params: parametros});
        setData(data);
    } catch(e) {
        setMensaje(e.response.data);
    }
}

export const PeticionPUT = async (url, info, setMensaje) => {
    try {
        const { data } = await axios.put(url, info);
        setMensaje(data.msg);
    } catch(e) {
        setMensaje(e.response.data);
    }
}

export const PeticionPOST = async (url, info, setMensaje) => {
    try {
        const { data } = await axios.post(url, info);
        setMensaje(data.msg);
    } catch(e) {
        setMensaje(e.response.data);
    }
}

export const PeticionDELETE = async (url, setMensaje) => {
    try {
        const { data } = await axios.delete(url);
        setMensaje(data);
    } catch(e) {
        setMensaje(e.response.data);


        
    }



}







