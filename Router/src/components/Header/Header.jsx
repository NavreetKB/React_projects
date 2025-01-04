import React from "react";
import {Link,NavLink} from "react-router-dom"



function Header(){

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive?"text-orange-700":"text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/About"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive?"text-orange-700":"text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Contactus"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive?"text-orange-700":"text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive?"text-orange-700":"text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Github
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}


export default Header


/*--------------------NOTES-------------------------------
1.Link and Navlink are features provided by a third party library called react-router-dom
2. Link is basically used in place of <a> tag because anchor tag reloads the entire page and since we are working on the principle of virtual dom through react we wont use <a>
3. Link vich href vgera de corresponding attribites milde a
eg href=to
4.Navlink provides some additional functionality. {isactive } vgera
5. In Navlink we have used classnames with callback functionality why?
  we want k user jis page te hai navbar te oh link accordingly highlight hove since we will have the one navbar through all pages.
6. we have access of a variable called "isactive" as a callback parameter
7. Navlink vich jo isActive use kita oh basically url naal matching karda k tuc us page te ho ya nhi  so true ya false return karuga and classname vich sari styling implement ho jaugi
 if true tan say background color change kardo else rehn do 
8. to="" is like href and should be same as that written in the path in <Route/>
 */