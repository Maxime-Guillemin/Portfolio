import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import transition from "../../transition"

import {
  TbBellSchool, TbSchool
} from "react-icons/tb";
import {
  GiSchoolBag
} from "react-icons/gi"
import {
  MdComputer
}from "react-icons/md"

import "./Diplomes.css";

function Diplomes() {
  return (
    <div className="mainContainer">
      <VerticalTimeline
        lineColor={ 'rgb(124, 123, 123)  ' }>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2D4059", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #2D4059" }}
          date="2022 - 2024 à  Amiens"
          iconStyle={{ background: "#2D4059", color: "#fff" }}
          icon={<TbSchool className="border-color"/>}
        >
          <h3 className="vertical-timeline-element-title">Master MIAGE</h3>
          <h6 className="vertical-timeline-element-subtitle fst-italic">
            Master Méthodes Informatiques Appliquées à la Gestion des
            Entreprises
          </h6>
          <p>
            Formation en informatique, avec spécialisation en développement web
            et gestion de projet, acquise en 2 ans en alternance.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#E84545", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #E84545" }}
          date="2021 - 2022 à Amiens"
          iconStyle={{ background: "#E84545", color: "#fff" }}
          icon={<MdComputer />}
        >
          <h3 className="vertical-timeline-element-title">Licence Pro RGI</h3>
          <h6 className="vertical-timeline-element-subtitle fst-italic">
            Licence professionnelle Réseaux et Génie Informatique
          </h6>
          <p>
            Formation en informatique, avec spécialisation en développement web
            et framework. Réalisée en un an en alternance.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#E84545", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #E84545" }}
          date="2019 - 2021 à Amiens"
          iconStyle={{ background: "#E84545", color: "#fff" }}
          icon={<MdComputer />}
        >
          <h3 className="vertical-timeline-element-title">DUT Informatique</h3>
          <h6 className="vertical-timeline-element-subtitle fst-italic">
            Diplôme Universitaire de Technologie Informatique
          </h6>
          <p>Acquisition des bases de l'informatique. Réalisé en deux ans</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2017-2019 à Laon"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<TbBellSchool />}
        >
          <h3 className="vertical-timeline-element-title">Bac STI2D</h3>
          <h6 className="vertical-timeline-element-subtitle fst-italic">Baccalauréat Science et Technologies de l'Industrie et du Développement Durable</h6>
          <p>
          Acquisition des bases de l'informatique et sensibilisation au développement durable. 
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F07B3F", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #F07B3F" }}
          date= "2016 à Anizy-Le-Château"
          iconStyle={{ background: "#F07B3F", color: "#fff" }}
          icon={<GiSchoolBag/>}
        >
          <h3 className="vertical-timeline-element-title">Brevet des collèges</h3>
          <p>On a vraiment besoin d'aller si loin ?</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default transition(Diplomes);
