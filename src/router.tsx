import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ModelosAbnt } from './pages/Modelos-Abnt';
import { ComoUsar } from './pages/Como-Usar';
import { RegrasAbnt } from './pages/Regras-ABNT';
import { Step1 } from './pages/Step1';
import { Step2 } from './pages/Step2';
import { Step3 } from './pages/Step3';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Step1 />} />
                <Route path="/step2" element={<Step2 />} />
                <Route path="/step3" element={<Step3 />} />
                <Route path="/comousar" element={<ComoUsar />} />
                <Route path="/modelos-abnt" element={<ModelosAbnt />} />
                <Route path="/regras-da-norma-abnt" element={<RegrasAbnt />} />
            </Routes>
        </BrowserRouter>
    );
}