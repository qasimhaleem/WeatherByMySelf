import React, { useState } from 'react'
import { useFormik } from 'formik'
import Body from './Body'

const Form = () => {
    const [search, setSearch] = useState();
    const formik = useFormik({
        initialValues: {
            search: ""
        },
        onSubmit: (values) => {
            setSearch(values.search);
        }
    })
    return (
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <div className="">
                    <input
                        type="text"
                        name='search'
                        id='search'
                        value={formik.values.search}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <button type='submit'>Search</button>
                </div>
                {search && <Body searchCity={search} />}
            </form>
        </div>
    )
}
export default Form