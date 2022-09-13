
import React from 'react'
import AppPicker from '../AppPicker'
import { useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'


const AppFormPicker = ({ items, name, placeholder, width, PickerItemComponent, numberOfColumns }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext()

    return (
        <>
            <AppPicker
                items={items}
                onSelectItem={item => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
                PickerItemComponent={PickerItemComponent}
                numberOfColumns={numberOfColumns}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormPicker