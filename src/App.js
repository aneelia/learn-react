import React from 'react';
import { InputWithNameValidation, InputWithNameAndEmailValidation } from "./patterns/hoc/simple";

const App = () =>  (
    <div>
        <InputWithNameValidation />
        <div />
        <InputWithNameAndEmailValidation />
    </div>
)
export default App;
