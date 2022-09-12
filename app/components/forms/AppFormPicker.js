import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import colors from '../../config/colors'
import AppPicker from '../AppPicker'
import { Formik, useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'

const AppFormPicker = ({ items, name, placeholder, width, PickerItemComponent, numberOfColumns }) => {
    const { setFieldValue, errors, touched, values } = useFormikContext()

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