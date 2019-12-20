import React from 'react';
import { InputWithNameValidation, InputWithNameAndEmailValidation } from "./patterns/hoc-to-render-prop/wrapper";

const App = () =>  (
    <div>
        <InputWithNameValidation />
        <div />
        <InputWithNameAndEmailValidation />
    </div>
)
export default App;
