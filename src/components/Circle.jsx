import './compo.css';
import { useEffect } from 'react';

function Circle() {

    function crcl1() {
        document.querySelector('.circleText h2').innerHTML = "Quality Assurance & Security Validation";
        document.querySelector('.circleText p').innerHTML = "Rigorous performance testing, system validation, and compliance checks to ensure enterprise-grade reliability.";
        document.getElementById("crcl1").style.backgroundColor = "#8F00ff";
        document.getElementById("crcl2").style.backgroundColor = "#080033";
        document.getElementById("crcl3").style.backgroundColor = "#080033";
        document.getElementById("crcl4").style.backgroundColor = "#080033";
        document.getElementById("crcl5").style.backgroundColor = "#080033";
        document.getElementById("crcl6").style.backgroundColor = "#080033";
    }
    function crcl2() {
        document.querySelector('.circleText h2').innerHTML = "Deployment & Continuous Optimization";
        document.querySelector('.circleText p').innerHTML = "Structured rollout, monitoring, and ongoing system enhancement to ensure long-term operational efficiency and scalability.";
        document.getElementById("crcl2").style.backgroundColor = "#8F00ff";
        document.getElementById("crcl1").style.backgroundColor = "#080033";
        document.getElementById("crcl3").style.backgroundColor = "#080033";
        document.getElementById("crcl4").style.backgroundColor = "#080033";
        document.getElementById("crcl5").style.backgroundColor = "#080033";
        document.getElementById("crcl6").style.backgroundColor = "#080033";
    }
    function crcl3() {
        document.querySelector('.circleText h2').innerHTML = "Strategic Requirement Mapping";
        document.querySelector('.circleText p').innerHTML = "We conduct deep operational analysis to understand infrastructure gaps, scalability needs, and system dependencies before solution design.";
        document.getElementById("crcl3").style.backgroundColor = "#8F00ff";
        document.getElementById("crcl2").style.backgroundColor = "#080033";
        document.getElementById("crcl1").style.backgroundColor = "#080033";
        document.getElementById("crcl4").style.backgroundColor = "#080033";
        document.getElementById("crcl5").style.backgroundColor = "#080033";
        document.getElementById("crcl6").style.backgroundColor = "#080033";
    }
    function crcl4() {
        document.querySelector('.circleText h2').innerHTML = "Architecture & Solution Blueprint";
        document.querySelector('.circleText p').innerHTML = "We define system architecture, integration layers, timelines, and deployment strategy aligned with long-term scalability goals.";
        document.getElementById("crcl4").style.backgroundColor = "#8F00ff";
        document.getElementById("crcl2").style.backgroundColor = "#080033";
        document.getElementById("crcl3").style.backgroundColor = "#080033";
        document.getElementById("crcl1").style.backgroundColor = "#080033";
        document.getElementById("crcl5").style.backgroundColor = "#080033";
        document.getElementById("crcl6").style.backgroundColor = "#080033";
    }
    function crcl5() {
        document.querySelector('.circleText h2').innerHTML = "System & Experience Design";
        document.querySelector('.circleText p').innerHTML = "We design secure, user-centric interfaces and structured workflows that ensure performance, usability, and operational clarity.";
        document.getElementById("crcl5").style.backgroundColor = "#8F00ff";
        document.getElementById("crcl2").style.backgroundColor = "#080033";
        document.getElementById("crcl3").style.backgroundColor = "#080033";
        document.getElementById("crcl4").style.backgroundColor = "#080033";
        document.getElementById("crcl1").style.backgroundColor = "#080033";
        document.getElementById("crcl6").style.backgroundColor = "#080033";
    }
    function crcl6() {
        document.querySelector('.circleText h2').innerHTML = "Scalable Engineering Execution";
        document.querySelector('.circleText p').innerHTML = "Modular development built on secure frameworks, API-first architecture, and performance-optimized infrastructure standards.";
        document.getElementById("crcl6").style.backgroundColor = "#8F00ff";
        document.getElementById("crcl2").style.backgroundColor = "#080033";
        document.getElementById("crcl3").style.backgroundColor = "#080033";
        document.getElementById("crcl4").style.backgroundColor = "#080033";
        document.getElementById("crcl5").style.backgroundColor = "#080033";
        document.getElementById("crcl1").style.backgroundColor = "#080033";
    }

    return (
        <div className='circleMain'>
            <div className='circleSub' onMouseOver={crcl1} id='crcl1'>
                <i class="fa-regular fa-circle-check"></i>
            </div>
            <div className='circleSub' onMouseOver={crcl2} id='crcl2'>
                <i class="fa-solid fa-rocket"></i>
            </div>
            <div className='circleSub' onMouseOver={crcl3} id='crcl3'>
                <i class="fa-solid fa-clipboard-list"></i>
            </div>
            <div className='circleSub' onMouseOver={crcl4} id='crcl4'>
                <i class="fa-solid fa-layer-group"></i>
            </div>
            <div className='circleSub' onMouseOver={crcl5} id='crcl5'>
                <i class="fa-solid fa-boxes-stacked"></i>
            </div>
            <div className='circleSub' onMouseOver={crcl6} id='crcl6'>
                <i class="fa-solid fa-code"></i>
            </div>
            <div className='circleText'>
                <h2>Quality Assurance & Security Validation</h2>
                <p>Rigorous performance testing, system validation, and compliance checks to ensure enterprise-grade reliability.</p>
            </div>
        </div>
    )
}

export default Circle;