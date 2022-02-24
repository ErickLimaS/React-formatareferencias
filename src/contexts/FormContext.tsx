// context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
    auxNewAuthor: number,

    currentStep: number,
    refType1: string,
    refType2: string,

    nameAuthor1: string,
    surAuthor1: string,
    nameAuthor2: string,
    surAuthor2: string,
    nameAuthor3: string,
    surAuthor3: string,
    nameAuthor4: string,
    surAuthor4: string,
    nameAuthor5: string,
    surAuthor5: string,
    nameAuthor6: string,
    surAuthor6: string,
    companyName: string,
    responsableBlog: string,
    blogTitle: string,
    namePodcastEpisode: string,
    namePodcast: string,
    podcastAnnouncer: string,
    userSocialMedia: string,
    displayNameUser: string,
    socialMediaMensage: string,
    remetenteName: string,
    emailSubject: string,
    destinatario: string,
    paginationBook: string,
    editionBook: string,
    durationVideo: string,
    uniDegreed: string,
    university: string,
    nameGuest: string,
    magazine: string,
    numberMagaz: string,

    doiCheckbox: string,
    etAlCheckbox: string,
    title: string,
    subtitle: string,
    url: string,
    local: string,

    dayAcess: number,
    monthAcess: string,
    yearAcess: number,

    dayPublic: number,
    monthPublic: string,
    yearPublic: number,

    placePublic: string,
    publishingComp: string,
    noDate: string,
    edition: string,
    radioCheck: string

}

type Action = {
    type: FormActions,
    payload: any;
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}

type FormProviderProps = {
    children: ReactNode
}

const initialData: State = {
    auxNewAuthor: 0,

    currentStep: 0,
    refType1: '',
    refType2: '',

    nameAuthor1: '',
    surAuthor1: '',
    nameAuthor2: '',
    surAuthor2: '',
    nameAuthor3: '',
    surAuthor3: '',
    nameAuthor4: '',
    surAuthor4: '',
    nameAuthor5: '',
    surAuthor5: '',
    nameAuthor6: '',
    surAuthor6: '',
    companyName: '',
    responsableBlog: '',
    blogTitle: '',
    namePodcastEpisode: '',
    namePodcast: '',
    podcastAnnouncer: '',
    userSocialMedia: '',
    displayNameUser: '',
    socialMediaMensage: '',
    remetenteName: '',
    emailSubject: '',
    destinatario: '',
    paginationBook: '',
    editionBook: '',
    durationVideo: '',
    uniDegreed: '',
    university: '',
    nameGuest: '',
    magazine: '',
    numberMagaz: '',

    doiCheckbox: '0',
    etAlCheckbox: '',
    title: '',
    subtitle: '',
    url: '',
    local: '[S.I.]',

    dayAcess: 0,
    monthAcess: '',
    yearAcess: 0,

    dayPublic: 0,
    monthPublic: '',
    yearPublic: 0,
    noDate: 's.d.',

    placePublic: '[S.I.]',
    publishingComp: '[s.n.]',

    edition: '',
    radioCheck: '1'
};

// context

const FormContext = createContext<ContextType | undefined>(undefined);

//reducer - aqui fazer a transformacao do abnt
export enum FormActions {
    setCurrentStep,
    setRefType1,
    setRefType2,
    setNameAuthor1,
    setSurAuthor1,
    setNameAuthor2,
    setSurAuthor2,
    setNameAuthor3,
    setSurAuthor3,
    setNameAuthor4,
    setSurAuthor4,
    setNameAuthor5,
    setSurAuthor5,
    setNameAuthor6,
    setSurAuthor6,
    setEtAlCheckbox,
    setTitle,
    setSubtitle,
    setUrl,
    setLocal,
    setDayAcess,
    setMonthAcess,
    setYearAcess,
    setDayPublic,
    setMonthPublic,
    setYearPublic,
    setPlacePublic,
    setPublishingComp,
    setNoDate,
    setEdition,
    setRadioCheck,
    setCompanyName,
    setResponsableBlog,
    setBlogTitle,
    setNamePodcastEpisode,
    setNamePodcast,
    setPodcastAnnouncer,
    setUserSocialMedia,
    setDisplayNameUser,
    setSocialMediaMensage,
    setRemetenteName,
    setEmailSubject,
    setDestinatario,
    setPaginationBook,
    setEditionBook,
    setDoiCheckbox,
    setDurationVideo,
    setUniDegreed,
    setUniversity,
    setNameGuest,
    setMagazine,
    setNumberMagaz,
    setAuxNewAuthor
};

const formReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setAuxNewAuthor:
            return { ...state, auxNewAuthor: action.payload };
        case FormActions.setLocal:
            return { ...state, local: action.payload };
        case FormActions.setSurAuthor1:
            return { ...state, surAuthor1: action.payload };
        case FormActions.setNameAuthor1:
            return { ...state, nameAuthor1: action.payload };
        case FormActions.setSurAuthor2:
            return { ...state, surAuthor2: action.payload };
        case FormActions.setNameAuthor2:
            return { ...state, nameAuthor2: action.payload };
        case FormActions.setSurAuthor3:
            return { ...state, surAuthor3: action.payload };
        case FormActions.setNameAuthor3:
            return { ...state, nameAuthor3: action.payload };
        case FormActions.setSurAuthor4:
            return { ...state, surAuthor4: action.payload };
        case FormActions.setNameAuthor4:
            return { ...state, nameAuthor4: action.payload };
        case FormActions.setSurAuthor5:
            return { ...state, surAuthor5: action.payload };
        case FormActions.setNameAuthor5:
            return { ...state, nameAuthor5: action.payload };
        case FormActions.setNameAuthor6:
            return { ...state, nameAuthor6: action.payload };
        case FormActions.setSurAuthor6:
            return { ...state, surAuthor6: action.payload };
        case FormActions.setNumberMagaz:
            return { ...state, numberMagaz: action.payload };
        case FormActions.setMagazine:
            return { ...state, magazine: action.payload };
        case FormActions.setNameGuest:
            return { ...state, nameGuest: action.payload };
        case FormActions.setUniDegreed:
            return { ...state, uniDegreed: action.payload };
        case FormActions.setUniversity:
            return { ...state, university: action.payload };
        case FormActions.setDurationVideo:
            return { ...state, durationVideo: action.payload };
        case FormActions.setDoiCheckbox:
            return { ...state, doiCheckbox: action.payload };
        case FormActions.setEditionBook:
            return { ...state, editionBook: action.payload };
        case FormActions.setPaginationBook:
            return { ...state, paginationBook: action.payload };
        case FormActions.setEmailSubject:
            return { ...state, emailSubject: action.payload };
        case FormActions.setRemetenteName:
            return { ...state, remetenteName: action.payload };
        case FormActions.setDestinatario:
            return { ...state, destinatario: action.payload };
        case FormActions.setDisplayNameUser:
            return { ...state, displayNameUser: action.payload };
        case FormActions.setSocialMediaMensage:
            return { ...state, socialMediaMensage: action.payload };
        case FormActions.setUserSocialMedia:
            return { ...state, userSocialMedia: action.payload };
        case FormActions.setNamePodcastEpisode:
            return { ...state, namePodcastEpisode: action.payload };
        case FormActions.setNamePodcast:
            return { ...state, namePodcast: action.payload };
        case FormActions.setPodcastAnnouncer:
            return { ...state, podcastAnnouncer: action.payload };
        case FormActions.setBlogTitle:
            return { ...state, blogTitle: action.payload };
        case FormActions.setResponsableBlog:
            return { ...state, responsableBlog: action.payload };
        case FormActions.setRadioCheck:
            return { ...state, radioCheck: action.payload };
        case FormActions.setCompanyName:
            return { ...state, companyName: action.payload };
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload };
        case FormActions.setRefType1:
            return { ...state, refType1: action.payload };
        case FormActions.setRefType2:
            return { ...state, refType2: action.payload };
        case FormActions.setEdition:
            return { ...state, edition: action.payload };
        case FormActions.setPlacePublic:
            return { ...state, placePublic: action.payload };
        case FormActions.setPublishingComp:
            return { ...state, publishingComp: action.payload };
        case FormActions.setNoDate:
            return { ...state, noDate: action.payload };
        case FormActions.setDayPublic:
            return { ...state, dayPublic: action.payload };
        case FormActions.setMonthPublic:
            return { ...state, monthPublic: action.payload };
        case FormActions.setYearPublic:
            return { ...state, yearPublic: action.payload };

        case FormActions.setTitle:
            return { ...state, title: action.payload };
        case FormActions.setSubtitle:
            return { ...state, subtitle: action.payload };
        case FormActions.setUrl:
            return { ...state, url: action.payload };
        case FormActions.setEtAlCheckbox:
            return { ...state, etAlCheckbox: action.payload };
        case FormActions.setDayAcess:
            return { ...state, dayAcess: action.payload };
        case FormActions.setMonthAcess:
            return { ...state, monthAcess: action.payload };
        case FormActions.setYearAcess:
            return { ...state, yearAcess: action.payload };

        default:
            return state;
    }
}

//provider
export const FormProvider = ({ children }: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

//hook
export const useForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useForm precisa do FormProvider');
    }
    return context;
}

