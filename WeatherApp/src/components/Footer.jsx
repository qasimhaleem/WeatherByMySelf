import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <footer>
                <Link to='github_url'>GitHub</Link>
                <Link to='linkedin_url'>LinkedIn</Link>
                <Link to='fb_url'>facebook</Link>
            </footer>
        </div>
    )
}

export default Footer