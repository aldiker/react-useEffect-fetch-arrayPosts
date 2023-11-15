import { useState, useEffect } from 'react'
import Post from './Post'

function Posts() {
    const [arrayPosts, setArrayPosts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setArrayPosts(json))
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false))
    }, [])

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <>
            <h1>--- Posts ---</h1>
            <hr />

            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                arrayPosts.map((post) => <Post {...post} key={post.id} />)
            )}
        </>
    )
}

export default Posts
