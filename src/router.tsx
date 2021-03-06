import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Referencias } from './pages/aboutAbnt/referencias';
import { Step1 } from './pages/Step1';
import { Step2 } from './pages/Step2';
import { Step3 } from './pages/Step3';
import { Creditos } from './pages/Creditos';
import { Sobre } from './pages/Sobre';
import { TermsConditions } from './pages/TermsConditions';
import { Contatos } from './pages/Contacts';
import { Privacidade } from './pages/Privacy';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Step1 />} />
                <Route path="/step2" element={<Step2 />} />
                <Route path="/step3" element={<Step3 />} />
                <Route path="/abnt/como-fazer-referencias-bibliograficas-em-abnt" element={<Referencias />} />
                <Route path='/about' element={<Sobre />} />
                <Route path='/credits' element={<Creditos />} />
                <Route path='/contacts' element={<Contatos />} />
                <Route path='/terms-and-conditions' element={<TermsConditions />} />
                <Route path='/privacy' element={<Privacidade />} />
            </Routes>
        </BrowserRouter>
    );
}