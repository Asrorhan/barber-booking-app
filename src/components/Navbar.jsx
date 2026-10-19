import { useState } from "react"
import { useLanguage } from "../context/LanguageContext";
import { useApp } from "../context/AppContext";
import { Link } from "react-router-dom";

function Navbar() {
    const { lang, setLang, t } = useLanguage();
    const { role, setRole } = useApp();

    return (
        <nav className="flex flex-col md:flex-row justify-between items-center bg-slate-900 text-white p-4 gap-4">
            <h1 className="text-xl font-bold">{t('title')}</h1>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
                <Link to="/" >{t('barbers')} </Link>
                <Link to="/my-bookings" >{t('myBookings')} </Link>

                {role === "admin" && (
                    <Link to="/analytics"
                        className="text-slate-300 hover:text-white transition font-medium" >
                        {t('analytics') || 'Analytics'}</Link>
                )}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3">
                <div className="flex gap-1.5">
                    <button
                        onClick={() => setLang("EN")}
                        className={`px-2.5 py-1 text-sm rounded transition ${lang === "EN"
                            ? "bg-indigo-600 text-white font-bold"
                            : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                            }`}
                    >
                        EN
                    </button>

                    <button
                        onClick={() => setLang("RU")}
                        className={`px-2.5 py-1 text-sm rounded transition ${lang === "RU"
                            ? "bg-indigo-600 text-white font-bold"
                            : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                            }`}
                    >
                        RU
                    </button>

                    <button
                        onClick={() => setLang("UZ")}
                        className={`px-2.5 py-1 text-sm rounded transition ${lang === "UZ"
                            ? "bg-indigo-600 text-white font-bold"
                            : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                            }`}
                    >
                        UZ
                    </button>
                </div>

                <button
                    onClick={() => setRole(role === "customer" ? "admin" : "customer")}
                    className={`px-3 py-1.5 text-sm rounded-lg font-medium transition cursor-pointer ${role === "admin"
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-indigo-600 hover:bg-indigo-700 text-white"
                        }`}
                >
                    {role === "admin" ? "Admin Mode" : "Customer Mode"}
                </button>
            </div>
        </nav >
    )
}
export default Navbar