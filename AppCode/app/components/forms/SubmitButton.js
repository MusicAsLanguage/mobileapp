import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';

function SubmitButton({ title, marginTop }) {
    const { handleSubmit } = useFormikContext();

    return (
        <AppButton title={title} onPress={handleSubmit} marginTop={marginTop}
        />
    );
}

export default SubmitButton;