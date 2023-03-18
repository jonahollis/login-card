import React from 'react'
import { Link } from 'react-router-dom'

export default class LoginCard extends React.Component {
    render() {
        return (
            <div class="container max-w-md mx-auto">
                <div  id="login-card"
                    class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 ">
                    <form class="space-y-6" action="#">
                        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Login</h3>
                        <div>
                            <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                            <input type="email" name="email" id="login-card-field email" class="bg-green-700 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-600 dark:bg-green-700 dark:placeholder-gray-600 dark:text-white" placeholder="name@company.com" required="" />
                        </div>
                            <div>
                                <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-green-700 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-600 dark:bg-green-700 dark:placeholder-gray-600 dark:text-white" required="" />
                            </div>
                                <div class="flex items-start">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                            <div class="text-sm ml-3">
                                                <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" class="text-sm text-green-500 hover:underline ml-auto dark:text-green-500">Lost
                                            Password?</a>
                                    </div>
                                    <button type="submit" class="w-full text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-700">Login to your account</button>
                                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                        Not registered? <a href="#" class="text-green-500 hover:underline dark:text-green-500">Create
                                            account</a>
                                    </div>
                    </form>
                </div>
            </div>
        )
    }
}
