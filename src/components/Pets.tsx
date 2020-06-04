import { FormAcceptButton, FormButton, FormButtonBar, FormTitle, GlobalContent, useErrorHandler, goHome } from "mascotas_react_common";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { loadPets, Pet } from "../api/petsApi";

export function Pets(props: RouteComponentProps) {
    const [pets, setPets] = useState(new Array<Pet>())

    const errorHandler = useErrorHandler()

    const loadCurrentPets = async () => {
        try {
            const result = await loadPets();
            setPets(result);
        } catch (error) {
            errorHandler.processRestValidations(error);
        }
    }

    const editPetClick = (petId: string) => {
        props.history.push("/editPet/" + petId);
    }

    const newPetClick = () => {
        props.history.push("/editPet");
    }

    useEffect(() => {
        loadCurrentPets()
        // eslint-disable-next-line
    }, [])

    return (
        <GlobalContent>
            <FormTitle>Mascotas</FormTitle>
            <table id="mascotas" className="table">
                <thead>
                    <tr>
                        <th> Nombre </th>
                        <th> Descripción </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet, i) => {
                        return (
                            <tr key={i}>
                                <td>{pet.name}</td>
                                <td>{pet.description}</td>
                                <td className="text">
                                    <img
                                        src="/assets/edit.png"
                                        alt=""
                                        onClick={() => editPetClick(pet.id)} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <FormButtonBar>
                <FormAcceptButton label="Nueva Mascota" onClick={newPetClick} />
                <FormButton label="Cancelar" onClick={() => goHome(props)} />
            </FormButtonBar>
        </GlobalContent>
    );
}
