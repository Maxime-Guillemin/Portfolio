// /src/components/Experiences/Experiences.js

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import transition from '../../transition';

import {
    FaBriefcase, FaLaptopCode, FaSchool
} from 'react-icons/fa';

import './Experiences.css';

function Experiences() {
    return (
        <div className="mainContainer">
            <VerticalTimeline lineColor={'rgb(124, 123, 123)'}>

                {/* Conseil Hauts-De-France - Regroupement des expériences */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#E84545", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid #E84545" }}
                    date="Septembre 2022 à Février 2025"
                    iconStyle={{ background: "#E84545", color: "#fff" }}
                    icon={<FaLaptopCode />}
                >
                    <h3 className="vertical-timeline-element-title">Conseil Hauts-De-France</h3>
                    <p>
                        Développement côté front, orienté visualisation de données.
                    </p>
                    <p>
                        <strong>Technologies :</strong> JavaScript, TypeScript, React, Superset.
                    </p>
                    <p>
                        <strong>Périodes :</strong>
                        <ul>
                            <li>Septembre 2024 à Février 2025 - CDD</li>
                            <li>Septembre 2022 à Septembre 2024 - Alternance</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>

                {/* Group Solution - Regroupement des expériences */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
                    date="Septembre 2021 à Juillet 2022"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Group Solution (ABR DBS DBSM)</h3>
                    <p>Administrateur réseau et systèmes - Développeur</p>
                    <p>
                        Installation et configuration de matériel informatique pour les clients de DBS. Alternance orientée Réseaux & Systèmes.
                        Réalisation d'un script d'automatisation de serveur en PowerShell.
                    </p>
                    <p>
                        <strong>Périodes :</strong>
                        <ul>
                            <li>Juillet 2022 - CDD</li>
                            <li>Septembre 2021 à Juin 2022 - Alternance</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default transition(Experiences);
