import { useState } from "react";

const useInputField = (defaultValue) => {
    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handFieldOnChange = e => {
        setFieldValue(e.target.value)
    }

    return [fieldValue, handFieldOnChange]

}





export default useInputField;