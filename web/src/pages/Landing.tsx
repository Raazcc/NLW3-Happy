import React from 'react'

import '../styles/global.css'
import '../styles/pages/landing.css'
import { FiArrowRight } from 'react-icons/fi'
import logoImg from '../images/Logo.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div>
            <div id="page-landing">
                <div className="content-wrapper">
                    <img src={logoImg} alt="Happy" />

                    <main>
                        <h1>Leve felicidade para o mundo</h1>
                        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                    </main>

                    <div className="location">
                        <strong>Jundiaí</strong>
                        <span>São Paulo</span>
                    </div>

                    <Link to="/app" className="enter-app">
                        <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing