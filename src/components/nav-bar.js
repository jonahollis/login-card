import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
    render() {
        return (
        <nav id="nav" className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div>
                <ul className="container flex flex-wrap items-center justify-between mx-auto">
                    <li className="text-xl text-neutral-800 dark:text-neutral-200" href="#">
                        NavBar
                    </li>
                    <li className="text-l text-neutral-800 dark:text-neutral-200">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="text-l text-neutral-800 dark:text-neutral-200">
                    <Link to="/page-one">Page 1</Link>
                    </li>
                    <li className="text-l text-neutral-800 dark:text-neutral-200">
                    <Link to="/page-two">Page 2</Link>
                    </li>
                    <li className="text-l text-neutral-800 dark:text-neutral-200">
                    <Link to="/page-three">Page 3</Link>
                    </li>
                </ul>
            </div>
        </nav>
        )
    }
}
