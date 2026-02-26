import './App.css';
import Header from './components/Header.jsx';
import Header2 from './components/Header2.jsx';
import Video from './components/Video.jsx';
import Partner from './components/Partners.jsx';
import Title1 from './components/TitleOne.jsx';
import Line from './components/lines.jsx';
import Card1 from './components/Card.jsx';
import Card2 from './components/Card2.jsx';
import Card3 from './components/Card3.jsx';
import SmallCard from './components/SmallCards.jsx';
import Card4 from './components/Card4.jsx';
import History from './components/History.jsx';
import Footer from './components/Footer.jsx';
import Carousel1 from './components/Carousel.jsx';
import Circle from './components/Circle.jsx';
import Image from './components/Images.jsx';
import TrustCard from './components/Trust.jsx';
import AICard from './components/AiCard.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Header2 />
      <Video />
      <Partner />
      <Title1
        para="Enterprise Platforms"
        heading="Our Digital Infrastructure Stack" />
      <Line />
      <div className='allcards'>
        <Card1
          cardHeading="Baap Platform"
          cardPara="Baap Platform is a unified enterprise infrastructure designed to centralize operations, automate workflows, and deliver real-time organizational intelligence. It integrates ERP, HRMS, project management, inventory, finance, and analytics into a scalable architecture that eliminates system silos. Built for growing institutions and enterprises, it enables operational transparency, performance visibility, and long-term digital transformation under a single secure framework."
          imgSrc="cImage1.png"
          clsName={"c1"} />
        <Card2
          cardHeading="ERP Web + School Book App"
          cardPara="ERP Web + School Book App is a comprehensive academic and administrative infrastructure built for modern educational institutions. It unifies admissions, finance, transport, examination systems, reporting, and communication into a centralized digital ecosystem. By automating institutional workflows and enabling real-time visibility, it reduces manual dependency, improves operational control, and strengthens decision-making across academic environments."
          imgSrc="cImage2.png"
          clsName={"c2"} />
        <Card1
          cardHeading="HRMS + Office Book App"
          cardPara="HRMS + Office Book App is an enterprise workforce management system designed to streamline employee lifecycle operations, attendance, payroll, compliance, and internal coordination. Built on scalable digital architecture, it enhances workforce transparency, reduces administrative overhead, and enables data-driven human resource decisions for organizations of all sizes."
          imgSrc="cImage3.png"
          clsName={"c3"} />
        <Card2
          cardHeading="CRM + CRM App"
          cardPara="CRM + CRM App is a performance-focused customer management platform built to optimize sales pipelines, engagement workflows, and revenue tracking. It centralizes client interactions, automates follow-ups, and provides actionable insights through integrated analytics. Designed for scalable business environments, it strengthens conversion efficiency and long-term customer retention."
          imgSrc="cImage4.png"
          clsName={"c4"} />
        <Card1
          cardHeading="Janhit App + Web"
          cardPara="Janhit App + Web is a digital governance and citizen engagement platform developed to streamline public communication, grievance management, and service accessibility. It creates a structured bridge between institutions and communities through transparent workflows, centralized reporting, and real-time information systems."
          imgSrc="cImage5.png"
          clsName={"c5"} />
        <Card2
          cardHeading="Sangamner AI"
          cardPara="Sangamner AI is an intelligent analytics and automation engine designed to support data-driven operational ecosystems. It leverages AI-based insights, predictive modeling, and workflow optimization to enhance organizational efficiency. Built to integrate with enterprise platforms, it transforms raw data into actionable intelligence for scalable growth."
          imgSrc="cImage6.png"
          clsName={"c6"} />
      </div>
      <Card3 />
      <Title1
        para="Core Capabilities"
        heading="Enterprise Technology Capabilities" />
      <Line />
      <div style={{ margin: "20px 0 0 0" }}>
        <div className='SMCards'>
          <SmallCard
            imgSrc="fa-solid fa-hexagon-nodes"
            heading="Enterprise Software Engineering"
            para="Designing scalable, secure, and performance-driven software systems aligned with enterprise infrastructure needs."
            cls="SMC1" />
          <SmallCard
            imgSrc="fa-solid fa-brain"
            heading="AI & Automation Systems"
            para="Building predictive models, intelligent workflows, and data-driven automation engines for operational efficiency."
            cls="SMC2" />
          <SmallCard
            imgSrc="fa-solid fa-arrow-trend-up"
            heading="Digital Growth Infrastructure"
            para="Structured SEO, content architecture, and performance analytics systems that support scalable digital expansion."
            cls="SMC3" />
        </div>
        <div className='SMCards'>
          <SmallCard
            imgSrc="fa-brands fa-hotjar"
            heading="Advanced Data Intelligence"
            para="Transforming raw enterprise data into actionable insights through dashboards, analytics frameworks, and reporting systems."
            cls="SMC4" />
          <SmallCard
            imgSrc="fa-solid fa-book-open"
            heading="Technical Talent Development"
            para="Building industry-ready professionals through practical engineering training and applied technology programs."
            cls="SMC5" />
          <SmallCard
            imgSrc="fa-solid fa-tree"
            heading="Digital Inclusion & Rural Innovation"
            para="Enabling technology adoption across emerging ecosystems through scalable digital platforms and innovation initiatives."
            cls="SMC6" />
        </div>
      </div>
      <Title1
        para="Competitive Advantage"
        heading="Why Enterprises Choose Us" />
      <Line />
      <div className='chooseUs'>
        <div className='rightAlign cd4'>
          <Card4
            cls="cd4Main"
            num="1"
            heading="AI-Driven Architecture"
            para="We design systems powered by data intelligence, predictive analytics, and automation frameworks to improve operational performance and strategic decision-making." />
          <Card4
            cls="cd4Main"
            num="2"
            heading="Technology Partnership"
            para="We operate as infrastructure partners, providing continuous optimization, system evolution, and scalable support aligned with business growth." />
        </div>
        <div className='cd4Image'>
          <img src='mean.webp' />
        </div>
        <div className='leftAlign cd4'>
          <Card4
            cls="cd4Main"
            num="3"
            heading="Production-Ready Engineering"
            para="Our platforms are built for real-world deployment, secure, scalable, and performance-optimized for enterprise environments." />
          <Card4
            cls="cd4Main"
            num="4"
            heading="Execution-Focused Talent Model"
            para="Our distributed engineering ecosystem ensures practical expertise, disciplined development standards, and cost-efficient scalability." />
        </div>
      </div>
      <History
        year="2022"
        yearPara="Engineering Foundation"
        client="23+"
        clientPara="Enterprise Deployments"
        user="500+"
        userPara="Active Users"
        engineers="144+"
        engineersPara="Core Engineers" />
      <Title1
        para="Enterprise Deployments"
        heading="Infrastructure & Platform Implementations" />
      <Line />
      <Carousel1 />
      <Title1
        para="Delivery Framework"
        heading="Our Enterprise Delivery Model" />
      <Line />
      <Circle />
      <Title1
        para="Industry Presence"
        heading="Strategic Collaborations & Recognition" />
      <Line />
      <div className='collabrorator'>
        <Image />
      </div>
      <Title1
        para="Client Endorsements"
        heading="Enterprise Trust & Recognition" />
      <Line />

      <div className='trust'>
        <div className='trustMain'>
          <TrustCard
            src="people1.webp"
            cls="fa-solid fa-quote-left"
            name="Achyut Godbole"
            role="Indian Business Executive"
            desc="Establishing a technology company in a rural ecosystem is both ambitious and strategically bold. The Baap Company has demonstrated disciplined execution, strong technical capability, and a scalable operational model. Their approach reflects long-term vision combined with practical engineering strength." />
          <TrustCard
            src="people2.webp"
            cls="fa-solid fa-quote-left"
            name="Sagar Babar"
            role="Founder, Comsense Technologies"
            desc="The Baap Company consistently delivers high-quality technology solutions with structured execution and measurable results. Their ability to combine innovation with operational clarity makes them a dependable partner for scalable digital initiatives." />
          <TrustCard
            src="people3.webp"
            cls="fa-solid fa-quote-left"
            name="Manoj Agarwal"
            role="Founder and CEO, SIMPLIFY VIMS"
            desc="The Baap Company brings both technical depth and execution discipline to every engagement. Their focus on system reliability, performance standards, and client alignment positions them as a strong partner for enterprise-grade digital transformation." />
          <TrustCard
            src="people4.webp"
            cls="fa-solid fa-quote-left"
            name="Sarangdhar Nirmal"
            role="Chairman, Prabhat Dairy"
            desc="The Baap Company demonstrates a structured approach to digital infrastructure development, combining operational discipline with scalable system design. Their focus on practical implementation and long-term impact creates measurable value for organizations and emerging ecosystems alike." />
          <TrustCard
            src="people5.webp"
            cls="fa-solid fa-quote-left"
            name="Hanmant Gaikwad"
            role="Chairman and MD. BVG India Limited"
            desc="The Baap Company delivers technology solutions with clarity, execution strength, and performance focus. Their ability to integrate creativity with disciplined engineering makes them a reliable partner for scalable enterprise initiatives." />
          <TrustCard
            src="people6.webp"
            cls="fa-solid fa-quote-left"
            name="Vitthal Jangale"
            role="Software Professional"
            desc="The Baap Company bridges the gap between academic knowledge and real-world technology execution. Their practical engineering model and industry-aligned training approach produce professionals capable of contributing to enterprise environments from day one." />
        </div>
      </div>
      <AICard
        cardHeading="AI-Powered Enterprise Solutions"
        cardPara="Transform operations with intelligent automation, predictive analytics, and scalable AI systems designed to improve efficiency, reduce costs, and accelerate digital transformation."
        imgSrc="AI.webp" />
      <Footer />

    </div>
  );
}

export default App;