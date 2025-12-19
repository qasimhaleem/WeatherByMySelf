import React, { useState } from 'react'
import { useFormik } from 'formik'
import Body from './Body'

const Form = () => {
    const [search, setSearch] = useState("");
    const formik = useFormik({
        initialValues: {
            search: ""
        },
        onSubmit: (values) => {
            setSearch(values.search);
        }
    });

    return (
        <div className='  bg-gray-600 h-screen  text-white  font-black flex justify-around items-center border border-b-cyan-800'>
            <form onSubmit={formik.handleSubmit}>
                <div className="border rounded-sm bloc">
                    <input
                        type="text"
                        name='search'
                        id='search'
                        value={formik.values.search}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div>
                    <button type='submit' className='mx-20 bg-blue-900 p-3 border rounded-sm my-3 w-35 h-14'>Search</button>
                </div>
                {search && <Body searchCity={search} />}
            </form>
        </div>

    )
}
export default Form