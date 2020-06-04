export interface Pet {
    id: string;
    name: string;
    birthDate: string;
    description: string;
}
export declare function loadPets(): Promise<Pet[]>;
export declare function loadPet(id: string): Promise<Pet>;
export declare function newPet(payload: Pet): Promise<Pet>;
export declare function savePet(payload: Pet): Promise<Pet>;
export declare function deletePet(id: string): Promise<void>;
