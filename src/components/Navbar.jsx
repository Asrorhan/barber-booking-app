import { useState } from "react"
import { useLanguage } from "../context/LanguageContext";
import { useApp } from "../context/AppContext";
import { Link } from "react-router-dom";

function Navbar() {
    const { lang, setLang, t } = useLanguage();
    const { role, setRole } = useApp();

    return (
        <nav className="flex justify-between items-center bg-slate-900 text-white p-4">
            <h1 className="text-xl font-bold">{t('title')}</h1>
            <div className="flex gap-6 items-center">
                <Link to="/" >{t('barbers')} </Link>
                <Link to="/my-bookings" >{t('myBookings')} </Link>
            </div>

            <div className="flex gap-4">

                <div className="flex gap-2">
                    <button
                        onClick={() => setLang("EN")}
                        className={`px-3 py-1 rounded transition ${lang === "EN"
                            ? "bg-indigo-600 text-white font-bold"
                            : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                            }`}
                    >
                        EN
                    </button>

                    <button
                        onClick={() => setLang("RU")}
                        className={`px-3 py-1 rounded transition ${lang === "RU"
                            ? "bg-indigo-600 text-white font-bold"
                            : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                            }`}
                    >
                        RU
                    </button>

                    <button
                        onClick={() => setLang("UZ")}
                        className={`px-3 py-1 rounded transition ${lang === "UZ"
                            ? "bg-indigo-600 text-white font-bold"
                            : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                            }`}
                    >
                        UZ
                    </button>
                </div>

                <button onClick={() => setRole(role === "customer" ? "admin" : "customer")}
                    className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700">
                    {role === "customer" ? t('roleCustomer') : t('roleAdmin')}
                </button>
            </div>
        </nav >
    )
}
export default Navbar