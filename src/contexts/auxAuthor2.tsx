import { TextInput, Tooltip } from "@mantine/core";
import { InfoCircledIcon } from "@modulz/radix-icons";
import { ChangeEvent } from "react";
import { useForm, FormActions } from "./FormContext";

export const Teste = () => {
    const { state, dispatch } = useForm();

    //infoicon
    const AuthorFirstInfoCircle = (
        <Tooltip label='Escreva o primeiro nome nessa seção. Se for uma organização que escreveu, bote o nome aqui.' position='top' placement="center" withArrow>
            <InfoCircledIcon color='black' />
        </Tooltip>
    );
    const AuthorSurInfoCircle = (
        <Tooltip label='Escreva o sobrenome nessa seção. Ex: Sousa. Se for uma organização quem escreveu, deixe  esse espaço em branco.' position='top' placement="center" withArrow arrowSize={3}>
            <InfoCircledIcon color='black' />
        </Tooltip>
    );

    //handle
    const handleNameAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNameAuthor1,
            payload: e.target.value
        });
    }
    const handleSurAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({

            type: FormActions.setSurAuthor1,
            payload: e.target.value
        });
    };
    const handleNameAuthor2 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNameAuthor2,
            payload: e.target.value
        });
    }
    const handleSurAuthor2 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({

            type: FormActions.setSurAuthor2,
            payload: e.target.value
        });
    };
    const handleNameAuthor3 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNameAuthor3,
            payload: e.target.value
        });
    }
    const handleSurAuthor3 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({

            type: FormActions.setSurAuthor3,
            payload: e.target.value
        });
    };
    const handleNameAuthor4 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNameAuthor4,
            payload: e.target.value
        });
    }
    const handleSurAuthor4 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({

            type: FormActions.setSurAuthor4,
            payload: e.target.value
        });
    };
    const handleNameAuthor5 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNameAuthor5,
            payload: e.target.value
        });
    }
    const handleSurAuthor5 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({

            type: FormActions.setSurAuthor5,
            payload: e.target.value
        });
    };
    const handleNameAuthor6 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNameAuthor6,
            payload: e.target.value
        });
    }
    const handleSurAuthor6 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({

            type: FormActions.setSurAuthor6,
            payload: e.target.value
        });
    };

    let newAuthor: any;
    newAuthor = '';

    if (state.auxNewAuthor === 1) {
        newAuthor = (
            <div>
                <hr />

                <TextInput required label="2° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção" type='text'
                    onChange={handleNameAuthor1} placeholder='Ex: João'
                    rightSection={AuthorFirstInfoCircle} />

                <hr />

                <TextInput required label="Sobrenome do 2° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção" type='text' onChange={handleSurAuthor1} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />
            </div>
        )
    }
    else if (state.auxNewAuthor === 2) {
        newAuthor = (
            <div>
                <div>
                    <hr />
                    <TextInput required label="2° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor2} placeholder='Ex: João'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 2° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção" type='text' onChange={handleSurAuthor2} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="3° Autor(a) / Editor(a)" description="O primeiro nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor3} placeholder='Ex: Clara'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 3° Autor(a) /Editor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção" type='text' onChange={handleSurAuthor3} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />
                </div>
            </div>
        )
    }
    else if (state.auxNewAuthor === 3) {
        newAuthor = (
            <div>
                <div>
                    <TextInput required label="2° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor2} placeholder='Ex: João'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 2° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção" type='text' onChange={handleSurAuthor2} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="3° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor3} placeholder='Ex: João'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 3° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção" type='text' onChange={handleSurAuthor3} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="4° Autor(a) / Editor(a)" description="O primeiro nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor4} placeholder='Ex: Clara'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 4° Autor(a) /Editor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção" type='text' onChange={handleSurAuthor4} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />
                </div>
            </div>
        )
    }
    else if (state.auxNewAuthor === 4) {
        newAuthor = (
            <div>
                <div>
                    <hr />
                    <TextInput required label="2° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor2} placeholder='Ex: João'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 2° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção" type='text' onChange={handleSurAuthor2} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="3° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor3} placeholder='Ex: João'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 3° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção" type='text' onChange={handleSurAuthor3} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="4° Autor(a) / Editor(a)" description="O primeiro nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor4} placeholder='Ex: Clara'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 4° Autor(a) /Editor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção" type='text' onChange={handleSurAuthor4} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />
                </div>
            </div>
        )
    }
    else if (state.auxNewAuthor === 5) {
        newAuthor = (
            <div>
                <div>
                    <hr />
                    <TextInput required label="2° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor2} placeholder='Ex: João'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 2° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção" type='text' onChange={handleSurAuthor2} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="3° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor3} placeholder='Ex: João'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 3° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção" type='text' onChange={handleSurAuthor3} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="4° Autor(a) / Editor(a)" description="O primeiro nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor4} placeholder='Ex: Clara'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 4° Autor(a) /Editor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção" type='text' onChange={handleSurAuthor4} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />
                </div>
                <div>
                    <TextInput required label="5° Autor(a) / Editor(a)" description="O primeiro nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor5} placeholder='Ex: Clara'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 5° Autor(a) /Editor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção" type='text' onChange={handleSurAuthor5} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />
                </div>
            </div>
        )
    }
    else if (state.auxNewAuthor !== 1 && state.auxNewAuthor !== 2 && state.auxNewAuthor !== 3 && state.auxNewAuthor !== 4 && state.auxNewAuthor !== 5 && state.auxNewAuthor !== 0) {
        newAuthor = (
            <div>
                <div>
                    <hr />
                    <TextInput required label="2° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor2} placeholder='Ex: João'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 2° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção" type='text' onChange={handleSurAuthor2} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="3° Autor(a) / Editor(a)" description="O segundo nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor3} placeholder='Ex: João'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 3° Autor(a) / Editor(a)" description="Apenas o sobrenome do autor(a) / editor(a) vai nessa seção" type='text' onChange={handleSurAuthor3} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />

                    <hr />
                </div>
                <div>
                    <TextInput required label="4° Autor(a) / Editor(a)" description="O primeiro nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor4} placeholder='Ex: Clara'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 4° Autor(a) /Editor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção" type='text' onChange={handleSurAuthor4} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />
                </div>
                <div>
                    <TextInput required label="5° Autor(a) / Editor(a)" description="O primeiro nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor5} placeholder='Ex: Clara'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 5° Autor(a) /Editor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção" type='text' onChange={handleSurAuthor5} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />
                </div>
                <div>
                    <TextInput required label="6° Autor(a) / Editor(a)" description="O primeiro nome do autor(a) vai nessa seção" type='text'
                        onChange={handleNameAuthor6} placeholder='Ex: Clara'
                        rightSection={AuthorFirstInfoCircle} />

                    <hr />

                    <TextInput required label="Sobrenome do 6° Autor(a) /Editor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção" type='text' onChange={handleSurAuthor6} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />
                </div>
            </div>
        )
    }
    else {
        console.log('aut2')
    }

    return newAuthor;
}