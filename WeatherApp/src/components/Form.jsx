import React, { useState } from 'react'
import { useFormik } from 'formik'
import Body from './Body'

const Form = () => {
    const [weather, setWeather] = useState();
    const formik = useFormik({
        initialValues: {
            CityName: " ",
        },
        onSubmit: (values) => {
            setWeather(values.CityName);
        }
    })

    return (
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <div className="min-h-screen w-full flex flex-col items-center pt-20 gap-10 bg-slate-100">
                    <input
                        type="text"
                        name='CityName'
                        id='CityName'
                        value={formik.values.CityName}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <button type='submit'>Search</button>
                    <Body searchName={weather} />
                </div>
            </form>
        </div>
    )
}

export default Form