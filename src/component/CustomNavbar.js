'use client'

import {useState} from 'react'
import {Dialog, DialogPanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {NavItem, NavLink} from "reactstrap";
import {NavLink as ReactLink, useLocation} from "react-router-dom";
import "../style/NavBar.css";
import Logo from "../asset/HeaderLogo.png";
import "../style/fonts.css";

const navigation = [
    {name: 'المتحدثين', href: ''},
    {name: 'التسجيل', href: '/reg3'},
    {name: 'الرعايات', href: '/regmethod'},
    {name: 'الجهات والرعاة', href: '/reg2'},
    {name: 'المركز الإعلامي', href: '/reg1'},
    {name: 'الأجندة وورش العمل', href: '/cal'},
    {name: 'عن المؤتمر', href: '/'},
]

export default function CustomNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation();

    const style = {
        logo: {
            width: "120px",
        }
    }
    return (
        <div style={{marginBottom: '15rem', fontFamily: "DiodrumRegular"}}>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 custom-navbar-bg">
                    <div className="flex lg:flex-1">
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-6 custom-navbar">
                        {navigation.map((item) => (
                            <NavItem key={item.name} className="nav-link">
                                <NavLink tag={ReactLink} to={item.href}
                                         className={`text-sm font-semibold text-white leading-6 rounded-md px-1 py-3 transition-colors duration-300 custom-item ${
                                             location.pathname === item.href ? 'custom-active-bg' : ''
                                         }`}
                                >
                                    {item.name}
                                </NavLink>
                            </NavItem>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <img src={Logo} alt="" style={style.logo}/>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50"/>
                    <DialogPanel
                        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <NavItem className="nav-link">
                                <NavLink tag={ReactLink} to="/"
                                         className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    {/*<img*/}
                                    {/*    alt=""*/}
                                    {/*    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"*/}
                                    {/*    className="h-8 w-auto"*/}
                                    {/*/>*/}
                                </NavLink>
                            </NavItem>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6"/>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <NavItem key={item.name}
                                                 href={item.href}
                                                 className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            <NavLink tag={ReactLink} to={item.href}
                                                     className="text-sm font-semibold leading-6 text-gray-900">
                                                {item.name}
                                            </NavLink>
                                        </NavItem>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </div>
    )
}
