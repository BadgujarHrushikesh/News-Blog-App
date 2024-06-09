import React, { useState } from 'react'
import axios from 'axios'

import Layout from '../components/Layout'
import Spinner from '../components/Spinner'

import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function AddNews() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)

    const user = JSON.parse(localStorage.getItem('user'))
    // console.log("from local storage" , user);
    

    const navigate = useNavigate()

    const url = 'http://localhost:8000/'

const Home = () => {
    navigate('/home')
}


    const save = async () => {
        setLoading(true)
        try {
            const payload = {
                title,
                description,
                content,
                postedBy: {
                    name: user.name || 'default name', 
                    email: user.email || 'default@example.com',
                    _id: user._id
                    
                }
            }
            await axios.post(url + 'api/newsitems/addnewsitem', payload)
            setLoading(false)
            // alert('News added Succesfully')
            toast('News added successfully..! 😍', 'success')
            navigate('/home')
          
            
        } catch (error) {
            console.log(error);
            // alert('Something Went Wrong')
            toast('Something went wrong ..! 😢', 'error')
            
            setLoading(false)
        }
    }

    return (
        <Layout>
            {loading && <Spinner />}
            <h1 className="text-2xl font-semibold mt-5 ml-5">Add News</h1>


            <div className="px-5 pt-5">  
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="border-2 h-10 w-full border-gray-300 px-5 mb-2"
                    placeholder="Title"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border-2 w-full border-gray-300 px-5 "
                    rows="4"
                    placeholder="Description"
                ></textarea>
            </div>


            <div className="px-5 pt-1">
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="draft-editor border-2 w-full border-gray-300 px-5 min-h-300 max-h-max-content"
                    rows="4"
                    placeholder="Description"
                ></textarea>
            </div>

            


            <div className="flex justify-end space-x-5 pr-5 mt-5">
                <button className="px-5 py-1 bg-red-700 text-sm text-white"
                onClick={Home}
                >
                    BACK
                </button>
                <button
                    className="px-5 py-1 bg-green-500 text-sm text-white"
                    onClick={save}
                >
                    SAVE
                </button>
            </div>
        </Layout>
    )
}
export default AddNews