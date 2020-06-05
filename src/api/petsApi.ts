import { environment } from "mascotas_react_common";
import { securedAxios } from "mascotas_react_store";

export interface Pet {
    id: string;
    name: string;
    birthDate: string;
    description: string;
}

export async function loadPets(): Promise<Pet[]> {
    try {
        const res = await securedAxios().get(environment.backendUrl + "/v1/pet");
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export async function loadPet(id: string): Promise<Pet> {
    try {
        const res = await securedAxios().get(environment.backendUrl + "/v1/pet/" + id);
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export async function newPet(payload: Pet): Promise<Pet> {
    try {
        const res = await securedAxios().post(environment.backendUrl + "/v1/pet", payload);
        return Promise.resolve(res.data as Pet);
    } catch (err) {
        return Promise.reject(err);
    }
}

export async function savePet(payload: Pet): Promise<Pet> {
    try {
        const res = await securedAxios().post(environment.backendUrl + "/v1/pet/" + payload.id, payload);
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export async function deletePet(id: string): Promise<void> {
    try {
        await securedAxios().delete(environment.backendUrl + "/v1/pet/" + id);
        return Promise.resolve();
    } catch (err) {
        return Promise.reject(err);
    }
}
