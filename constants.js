// @flow
import * as d3 from 'd3'

export type TrackId = 'ENGINEERING' | 'DATAMANAGE' | 'PROCESS' | 'SECURITY' | 
'USINGDATA' | 'TERMINOLOGY' | 'ANALYSIS' | 'GOVERNANCE' | 'CLIENTS' | 'FINANCIAL' | 
'SALES' | 'BUSINESS' | 'COMMUNICATION' | 'TEAMWORK' | 'PROBELMSOLVING' | 'INFLUENCING'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'ENGINEERING': Milestone,
  'DATAMANAGE': Milestone,
  'PROCESS': Milestone,
  'SECURITY': Milestone,
  'USINGDATA': Milestone,
  'TERMINOLOGY': Milestone,
  'ANALYSIS': Milestone,
  'GOVERNANCE': Milestone,
  'CLIENTS': Milestone,
  'FINANCIAL': Milestone,
  'SALES': Milestone,
  'BUSINESS': Milestone,
  'COMMUNICATION': Milestone,
  'TEAMWORK': Milestone,
  'PROBELMSOLVING': Milestone,
  'INFLUENCING': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'ENGINEERING': Track,
  'DATAMANAGE': Track,
  'PROCESS': Track,
  'SECURITY': Track,
  'USINGDATA': Track,
  'TERMINOLOGY': Track,
  'ANALYSIS': Track,
  'GOVERNANCE': Track,
  'CLIENTS': Track,
  'FINANCIAL': Track,
  'SALES': Track,
  'BUSINESS': Track,
  'COMMUNICATION': Track,
  'TEAMWORK': Track,
  'PROBELMSOLVING': Track,
  'INFLUENCING': Track
|}

export const tracks: Tracks = {
  "ENGINEERING": {
    "displayName": "Software Engineering",
    "category": "ENG",
    "description": "",
    "milestones": [{
      "summary": "Follow",
      "signals": [
        "Software Engineering: The planning, designing, creation, amending, verification, testing and documentation of new and amended software components in order to deliver agreed value to stakeholders. The identification, creation and application of agreed software development and security standards and processes. Adopting and adapting software development lifecycle models based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
        "Software Desing: The specification and design of software to meet defined requirements by following agreed design standards and principles. The definition of software, components, interfaces and related characteristics. The identification of concepts and patterns and the translation into a design which provides a basis for software construction and verification. The evaluation of alternative solutions and trade-offs. The facilitation of design decisions within the constraints of systems designs, design standards, quality, feasibility, extensibility and maintainability. The development and iteration of prototypes/simulations to enable informed decision-making. The adoption and adaptation of software design models, tools and techniques based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
        "Testing: The planning, design, management, execution and reporting of tests, using appropriate testing tools and techniques and conforming to agreed process standards and industry specific regulations. The purpose of testing is to ensure that new and amended systems, configurations, packages, or services, together with any interfaces, perform as specified (including security requirements) , and that the risks associated with deployment are adequately understood and documented. Testing includes the process of engineering, using and maintaining testware (test cases, test scripts, test reports, test plans, etc) to measure and improve the quality of the software being tested.",
      ],
      "examples": [
        "Designs, codes, verifies, tests, documents, amends and refactors simple programs/scripts.",
        "Reads and understands existing design documentation for simple software application or component which applies agreed modelling techniques, standards, patterns and tools.",
        "Executes given test scripts under supervision. Records results and reports issues. Develops an understanding of the role of testing within system development, as a tool for design improvement as well as a validation process.",
      ],
    }, {
      "summary": "Assist",
      "signals": [
        "Software Engineering: The planning, designing, creation, amending, verification, testing and documentation of new and amended software components in order to deliver agreed value to stakeholders. The identification, creation and application of agreed software development and security standards and processes. Adopting and adapting software development lifecycle models based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
        "Software Desing: The specification and design of software to meet defined requirements by following agreed design standards and principles. The definition of software, components, interfaces and related characteristics. The identification of concepts and patterns and the translation into a design which provides a basis for software construction and verification. The evaluation of alternative solutions and trade-offs. The facilitation of design decisions within the constraints of systems designs, design standards, quality, feasibility, extensibility and maintainability. The development and iteration of prototypes/simulations to enable informed decision-making. The adoption and adaptation of software design models, tools and techniques based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
        "Testing: The planning, design, management, execution and reporting of tests, using appropriate testing tools and techniques and conforming to agreed process standards and industry specific regulations. The purpose of testing is to ensure that new and amended systems, configurations, packages, or services, together with any interfaces, perform as specified (including security requirements) , and that the risks associated with deployment are adequately understood and documented. Testing includes the process of engineering, using and maintaining testware (test cases, test scripts, test reports, test plans, etc) to measure and improve the quality of the software being tested.",
      ],
      "examples": [
        "Designs, codes, verifies, tests, documents, amends and refactors simple programs/scripts. Applies agreed standards and tools, to achieve a well-engineered result. Reviews own work.",
        "Creates and documents detailed designs for simple software applications or components applying agreed modelling techniques, standards, patterns and tools. Contributes to the design of components of larger software systems. Reviews own work.",
        "Defines test conditions for given requirements. Designs test cases and creates test scripts and supporting data, working to the specifications provided. Interprets, executes and records test cases in accordance with project test plans. Analyses and reports test activities and results. Identifies and reports issues and risks.",
      ],
    }, {
      "summary": "Apply",
      "signals": [
        "Software Engineering: The planning, designing, creation, amending, verification, testing and documentation of new and amended software components in order to deliver agreed value to stakeholders. The identification, creation and application of agreed software development and security standards and processes. Adopting and adapting software development lifecycle models based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
        "Software Desing: The specification and design of software to meet defined requirements by following agreed design standards and principles. The definition of software, components, interfaces and related characteristics. The identification of concepts and patterns and the translation into a design which provides a basis for software construction and verification. The evaluation of alternative solutions and trade-offs. The facilitation of design decisions within the constraints of systems designs, design standards, quality, feasibility, extensibility and maintainability. The development and iteration of prototypes/simulations to enable informed decision-making. The adoption and adaptation of software design models, tools and techniques based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
        "Testing: The planning, design, management, execution and reporting of tests, using appropriate testing tools and techniques and conforming to agreed process standards and industry specific regulations. The purpose of testing is to ensure that new and amended systems, configurations, packages, or services, together with any interfaces, perform as specified (including security requirements) , and that the risks associated with deployment are adequately understood and documented. Testing includes the process of engineering, using and maintaining testware (test cases, test scripts, test reports, test plans, etc) to measure and improve the quality of the software being tested.",
      ],
      "examples": [
        "Designs, codes, verifies, tests, documents, amends and refactors moderately complex programs/scripts. Applies agreed standards and tools, to achieve a well-engineered result. Collaborates in reviews of work with others as appropriate.",
        "Undertakes complete design of moderately complex software applications or components applying agreed standards, patterns and tools. Assists as part of a team in the design of components of larger software systems. Specifies user and/or system interfaces. Creates multiple design views to address the concerns of the different stakeholders of the design and to handle separately functional and non-functional requirements. Assists in the evaluation of options and trade-offs. Collaborates in reviews of work with others as appropriate.",
        "Reviews requirements and specifications, and defines test conditions. Designs test cases and test scripts under own direction, mapping back to pre-determined criteria, recording and reporting outcomes. Analyses and reports test activities and results. Identifies and reports issues and risks associated with own work."
      ],
    }, {
      "summary": "Enable",
      "signals": [
        "Software Engineering: The planning, designing, creation, amending, verification, testing and documentation of new and amended software components in order to deliver agreed value to stakeholders. The identification, creation and application of agreed software development and security standards and processes. Adopting and adapting software development lifecycle models based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
        "Software Desing: The specification and design of software to meet defined requirements by following agreed design standards and principles. The definition of software, components, interfaces and related characteristics. The identification of concepts and patterns and the translation into a design which provides a basis for software construction and verification. The evaluation of alternative solutions and trade-offs. The facilitation of design decisions within the constraints of systems designs, design standards, quality, feasibility, extensibility and maintainability. The development and iteration of prototypes/simulations to enable informed decision-making. The adoption and adaptation of software design models, tools and techniques based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
        "Testing: The planning, design, management, execution and reporting of tests, using appropriate testing tools and techniques and conforming to agreed process standards and industry specific regulations. The purpose of testing is to ensure that new and amended systems, configurations, packages, or services, together with any interfaces, perform as specified (including security requirements) , and that the risks associated with deployment are adequately understood and documented. Testing includes the process of engineering, using and maintaining testware (test cases, test scripts, test reports, test plans, etc) to measure and improve the quality of the software being tested.",
      ],
      "examples": [
        "Designs, codes, verifies, tests, documents, amends and refactors complex programs/scripts and integration software services. Contributes to selection of the software development approach for projects, selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches. Applies agreed standards and tools, to achieve well-engineered outcomes. Participates in reviews of own work and leads reviews of colleagues' work.",
        "Designs software components and modules using appropriate modelling techniques following agreed software design standards, patterns and methodology. Creates and communicates multiple design views to identify and balance the concerns of all stakeholders of the software design and to allow for both functional and non-functional requirements. Identifies and evaluates alternative design options and trade-offs. Recommends designs which take into account target environment, performance security requirements and existing systems. Reviews, verifies and improves own designs against specifications. Leads reviews of others’ designs. Models, simulates or prototypes the behaviour of proposed software to enable approval by stakeholders, and effective construction of the software. Verifies software design by constructing and applying appropriate methods.",
        "Accepts responsibility for creation of test cases using own in-depth technical analysis of both functional and non-functional specifications (such as reliability, efficiency, usability, maintainability and portability). Creates traceability records, from test cases back to requirements. Produces test scripts, materials and regression test packs to test new and amended software or services. Specifies requirements for environment, data, resources and tools. Interprets, executes and documents complex test scripts using agreed methods and standards. Records and analyses actions and results, and maintains a defect register. Reviews test results and modifies tests if necessary. Provides reports on progress, anomalies, risks and issues associated with the overall project. Reports on system quality and collects metrics on test cases. Provides specialist advice to support others.",
      ],
    }, {
      "summary": "Advise/Ensure",
      "signals": [
        "Software Engineering: The planning, designing, creation, amending, verification, testing and documentation of new and amended software components in order to deliver agreed value to stakeholders. The identification, creation and application of agreed software development and security standards and processes. Adopting and adapting software development lifecycle models based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
        "Software Desing: The specification and design of software to meet defined requirements by following agreed design standards and principles. The definition of software, components, interfaces and related characteristics. The identification of concepts and patterns and the translation into a design which provides a basis for software construction and verification. The evaluation of alternative solutions and trade-offs. The facilitation of design decisions within the constraints of systems designs, design standards, quality, feasibility, extensibility and maintainability. The development and iteration of prototypes/simulations to enable informed decision-making. The adoption and adaptation of software design models, tools and techniques based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
        "Testing: The planning, design, management, execution and reporting of tests, using appropriate testing tools and techniques and conforming to agreed process standards and industry specific regulations. The purpose of testing is to ensure that new and amended systems, configurations, packages, or services, together with any interfaces, perform as specified (including security requirements) , and that the risks associated with deployment are adequately understood and documented. Testing includes the process of engineering, using and maintaining testware (test cases, test scripts, test reports, test plans, etc) to measure and improve the quality of the software being tested.",
      ],
      "examples": [
        "Takes technical responsibility across all stages and iterations of software development. Plans and drives software construction activities. Adopts and adapts appropriate software development methods, tools and techniques selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches. Measures and monitors applications of project/team standards for software construction including software security. Contributes to the development of organisational policies, standards, and guidelines for software development.",
        "Selects, adopts and adapts appropriate software design methods, tools and techniques; selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches. Specifies and designs large or complex software components. Undertakes impact analysis on major design options, makes recommendations and assesses and manages associated risks. Specifies prototypes/simulations to enable informed decision making. Evaluates the quality of others' systems designs to ensure adherence to standards and identifies corrective action, if needed. Ensures that the system design balances functional, quality, security and systems management requirements. Contributes to development of organisational software design and architecture policies and standards.",
        "Coordinates and manages planning of the system and/or acceptance tests, including software security testing, within a development or integration project or programme. Takes responsibility for integrity of testing and acceptance activities and coordinates the execution of these activities. Provides authoritative advice and guidance on any aspect of test planning and execution. Defines and communicates the test strategy for the project. Manages all test processes, including test plans, resources, costs, timescales, test deliverables and traceability. Manages client relationships with respect to testing matters. Identifies process improvements, and contributes to corporate testing standards and definition of best practice.",
      ],
    }, {
      "summary": "Initiate/Influence",
      "signals": [
        "Software Engineering: The planning, designing, creation, amending, verification, testing and documentation of new and amended software components in order to deliver agreed value to stakeholders. The identification, creation and application of agreed software development and security standards and processes. Adopting and adapting software development lifecycle models based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
        "Software Desing: The specification and design of software to meet defined requirements by following agreed design standards and principles. The definition of software, components, interfaces and related characteristics. The identification of concepts and patterns and the translation into a design which provides a basis for software construction and verification. The evaluation of alternative solutions and trade-offs. The facilitation of design decisions within the constraints of systems designs, design standards, quality, feasibility, extensibility and maintainability. The development and iteration of prototypes/simulations to enable informed decision-making. The adoption and adaptation of software design models, tools and techniques based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
        "Testing: The planning, design, management, execution and reporting of tests, using appropriate testing tools and techniques and conforming to agreed process standards and industry specific regulations. The purpose of testing is to ensure that new and amended systems, configurations, packages, or services, together with any interfaces, perform as specified (including security requirements) , and that the risks associated with deployment are adequately understood and documented. Testing includes the process of engineering, using and maintaining testware (test cases, test scripts, test reports, test plans, etc) to measure and improve the quality of the software being tested.",
      ],
      "examples": [
        "Develops organisational policies, standards, and guidelines for software construction and refactoring. Plans and leads software construction activities for strategic, large and complex development projects. Develops new methods and organisational capabilities and drives adoption of, and adherence to policies and standards.",
        "Leads the selection and development of appropriate software design methods, tools, techniques; whether predictive (plan-driven) approaches or more adaptive (iterative/agile) approaches. Develops organisational policies, standards, and guidelines for software design and software architectures. Ensures adherence to technical strategies and systems architectures (including security).",
        "Determines testing policy, and owns the supporting processes including software security testing. Takes responsibility for the management of all testing activities within a development or integration project or programme. Manages all risks associated with the testing and takes preventative action when any risks become unacceptable. Assesses and advises on the practicality of testing process alternatives, including automated testing. Initiates improvements to test processes and directs their implementation. Assesses suppliers' development and testing capabilities. Determines project testing standards for all phases, influencing all parties to conform to those standards. Manages client relationships with respect to all testing matters.",
      ],

    }],
  },

  "DATAMANAGE": {
    "displayName": "Data Engineering",
    "category": "ENG",
    "description": "",
    "milestones": [{
      "summary": "Follow",
      "signals": [
        "Data modelling and design: The development of models to represent and communicate data requirements and to enable organisations to understand their data assets and the relationships between real-world entities. The investigation, analysis and scoping of data requirements to support the development of software systems, data integration and data retrieval activities. The iteration, review and maintenance of data requirements and data models.",
        "Data management: The management of practices and processes to ensure the security, integrity, safety and availability of all forms of data and data structures that make up the organisation’s information. The management of data and information in all its forms and the analysis of information structure (including logical analysis of taxonomies, data and metadata). The development of innovative ways of managing the information assets of the organisation.",
        "Database design: The specification, design and maintenance of mechanisms for storage and access to both structured and unstructured information, in support of business information needs.",
      ],
      "examples": [
        "Applies data analysis, design, and modelling techniques to maintain an existing data structure.",
        "Assists in database support activities.",
        "Interprets installation standards to meet project needs.",
      ],
    }, {
      "summary": "Assist",
      "signals": [
        "Data modelling and design: The development of models to represent and communicate data requirements and to enable organisations to understand their data assets and the relationships between real-world entities. The investigation, analysis and scoping of data requirements to support the development of software systems, data integration and data retrieval activities. The iteration, review and maintenance of data requirements and data models.",
        "Data management: The management of practices and processes to ensure the security, integrity, safety and availability of all forms of data and data structures that make up the organisation’s information. The management of data and information in all its forms and the analysis of information structure (including logical analysis of taxonomies, data and metadata). The development of innovative ways of managing the information assets of the organisation.",
        "Database design: The specification, design and maintenance of mechanisms for storage and access to both structured and unstructured information, in support of business information needs.",
      ],
      "examples": [
        "Applies data analysis, design, and modelling techniques to establish, modify or maintain a data structure and its associated components (entity descriptions, relationship descriptions, attribute definitions).",
        "Assists in database support activities.",
        "Interprets installation standards to meet project needs and produces database or data warehouse component specifications.",
      ],
    }, {
      "summary": "Apply",
      "signals": [
        "Data modelling and design: The development of models to represent and communicate data requirements and to enable organisations to understand their data assets and the relationships between real-world entities. The investigation, analysis and scoping of data requirements to support the development of software systems, data integration and data retrieval activities. The iteration, review and maintenance of data requirements and data models.",
        "Data management: The management of practices and processes to ensure the security, integrity, safety and availability of all forms of data and data structures that make up the organisation’s information. The management of data and information in all its forms and the analysis of information structure (including logical analysis of taxonomies, data and metadata). The development of innovative ways of managing the information assets of the organisation.",
        "Database design: The specification, design and maintenance of mechanisms for storage and access to both structured and unstructured information, in support of business information needs.",
      ],
      "examples": [
        "Applies data analysis, design, modelling, and quality assurance techniques, based upon a detailed understanding of business processes, to establish, modify or maintain data structures and associated components (entity descriptions, relationship descriptions, attribute definitions). Advises database designers and other application development team members on the details of data structures and associated components.",
        "Uses database management system software and tools to collect agreed performance statistics. Carries out agreed database maintenance and administration tasks.",
        "Develops appropriate physical database or data warehouse design elements, within set policies, to meet business change or development project data requirements. Interprets installation standards to meet project needs and produces database or data warehouse component specifications.",
      ],
    }, {
      "summary": "Enable",
      "signals": [
        "Data modelling and design: The development of models to represent and communicate data requirements and to enable organisations to understand their data assets and the relationships between real-world entities. The investigation, analysis and scoping of data requirements to support the development of software systems, data integration and data retrieval activities. The iteration, review and maintenance of data requirements and data models.",
        "Data management: The management of practices and processes to ensure the security, integrity, safety and availability of all forms of data and data structures that make up the organisation’s information. The management of data and information in all its forms and the analysis of information structure (including logical analysis of taxonomies, data and metadata). The development of innovative ways of managing the information assets of the organisation.",
        "Database design: The specification, design and maintenance of mechanisms for storage and access to both structured and unstructured information, in support of business information needs.",
        "Information assurance: The protection of integrity, availability, authenticity, non-repudiation and confidentiality of information and data in storage and in transit. The management of risk in a pragmatic and cost effective manner to ensure stakeholder confidence.",
      ],
      "examples": [
        "Investigates corporate data requirements, and applies data analysis, design, modelling, and quality assurance techniques, to establish, modify or maintain data structures and their associated components (entity descriptions, relationship descriptions, attribute definitions). Provides advice and guidance to database designers and others using the data structures and associated components.",
        "Uses database management system software and tools, and knowledge of logical database schemata, to investigate problems and collect performance statistics and create reports. Carries out routine configuration, installation, and reconfiguration of database and related products. Develops and configures tools to enable automation of database administration tasks. Identify problems and issues and recommend corrective actions.",
        "Assesses proposed changes to object/data structures, in order to evaluate alternative options. Implements physical database designs to support transactional data requirements for performance and availability.",
        "Interprets information assurance and security policies and applies these in order to manage risks. Provides advice and guidance to ensure adoption of and adherence to information assurance architectures, strategies, policies, standards and guidelines. Uses testing to support information assurance. Contributes to the development of policies, standards and guidelines.",
      ],
    }, {
      "summary": "Advise/Ensure",
      "signals": [
        "Data modelling and design: The development of models to represent and communicate data requirements and to enable organisations to understand their data assets and the relationships between real-world entities. The investigation, analysis and scoping of data requirements to support the development of software systems, data integration and data retrieval activities. The iteration, review and maintenance of data requirements and data models.",
        "Data management: The management of practices and processes to ensure the security, integrity, safety and availability of all forms of data and data structures that make up the organisation’s information. The management of data and information in all its forms and the analysis of information structure (including logical analysis of taxonomies, data and metadata). The development of innovative ways of managing the information assets of the organisation.",
        "Database design: The specification, design and maintenance of mechanisms for storage and access to both structured and unstructured information, in support of business information needs.",
        "Information assurance: The protection of integrity, availability, authenticity, non-repudiation and confidentiality of information and data in storage and in transit. The management of risk in a pragmatic and cost effective manner to ensure stakeholder confidence.",
      ],
      "examples": [
        "Sets standards for data modelling and design tools and techniques, advises on their application, and ensures compliance. Manages the investigation of corporate data requirements, and co-ordinates the application of data analysis, design and modelling techniques, based upon a detailed understanding of the corporate information requirements, in order to establish, modify or maintain data structures and their associated components (entity descriptions, relationship descriptions, attribute definitions). Manages the iteration, review and maintenance of data requirements and data models.",
        "Develops and maintains procedures and documentation for databases. Identifies, evaluates and manages the adoption of appropriate database administration tools and processes, including automation. Contributes to the setting of standards for definition, security and integrity of database objects and ensures conformance to these standards. Manages database configuration including installing and upgrading software and maintaining relevant documentation. Monitors database activity and resource usage. Optimises database performance and plans for forecast resource needs.",
        "Develops and maintains specialist knowledge of database and data warehouse concepts, design principles, architectures, software and facilities. Assesses proposed changes to object/data structures, in order to evaluate alternative options. Implements physical database designs to support transactional data requirements for performance and availability. Implements data warehouse designs that support demands for business intelligence and data analytics.",
        "Develops corporate Information assurance policy, standards and guidelines. Contributes to the development of organisational strategies that address the evolving business risk and information control requirements. Drives adoption of and adherence to policies and standards through the provision of expert advice and guidance in order to ensure architectural principles are applied, requirements are defined and rigorous security testing is applied. Monitors environmental and market trends and pro-actively assesses impact on business strategies, benefits and risks.",
      ],
    }, {
      "summary": "Initiate/Influence",
      "signals": [
        "Data modelling and design: The development of models to represent and communicate data requirements and to enable organisations to understand their data assets and the relationships between real-world entities. The investigation, analysis and scoping of data requirements to support the development of software systems, data integration and data retrieval activities. The iteration, review and maintenance of data requirements and data models.",
        "Data management: The management of practices and processes to ensure the security, integrity, safety and availability of all forms of data and data structures that make up the organisation’s information. The management of data and information in all its forms and the analysis of information structure (including logical analysis of taxonomies, data and metadata). The development of innovative ways of managing the information assets of the organisation.",
        "Database design: The specification, design and maintenance of mechanisms for storage and access to both structured and unstructured information, in support of business information needs.",
        "Information assurance: The protection of integrity, availability, authenticity, non-repudiation and confidentiality of information and data in storage and in transit. The management of risk in a pragmatic and cost effective manner to ensure stakeholder confidence.",
      ],
      "examples": [
        "Sets standards for data modelling and design tools and techniques, advises on their application, and ensures compliance. Manages the investigation of corporate data requirements, and co-ordinates the application of data analysis, design and modelling techniques, based upon a detailed understanding of the corporate information requirements, in order to establish, modify or maintain data structures and their associated components (entity descriptions, relationship descriptions, attribute definitions). Manages the iteration, review and maintenance of data requirements and data models.",
        "Develops and maintains procedures and documentation for databases. Identifies, evaluates and manages the adoption of appropriate database administration tools and processes, including automation. Contributes to the setting of standards for definition, security and integrity of database objects and ensures conformance to these standards. Manages database configuration including installing and upgrading software and maintaining relevant documentation. Monitors database activity and resource usage. Optimises database performance and plans for forecast resource needs.",
        "Provides expert guidance in the selection, provision and use of database and data warehouse architectures, software and facilities. Provides specialist expertise in the design characteristics of database management systems (DBMS) or data warehouse products/services. Ensures that physical database design policy supports transactional data requirements for performance and availability. Ensures that data warehouse design policy supports demands for business intelligence and data analytics.",
        "Directs the creation and review of an enterprise information assurance strategy to support the strategic requirements of the business. Ensures compliance between business strategies and information assurance by setting strategies, policies, standards and practices and leading the provision of information assurance expertise, advice and guidance across all of the organisation's information and information systems.",
      ],
    }],
  },

  "PROCESS": {
    "displayName": "Process & Tooling",
    "category": "ENG",
    "description": "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
    "milestones": [{
      "summary": "Follow",
      "signals": [
        "Methords & Tooling: Ensuring that appropriate methods and tools for the planning, development, testing, operation, management and maintenance of systems are adopted and used effectively throughout the organisation.",
        "Release & Deployment: The management of the processes, systems and functions to package, build, test and deploy changes and updates (which are bounded as “releases”) into a live environment, establishing or continuing the specified Service, to enable controlled and effective handover to Operations and the user community.",
        "Knowledge Management: The systematic management of vital knowledge to create value for the organisation by capturing, sharing, developing and exploiting the collective knowledge of the organisation to improve performance, support decision making and mitigate risks. The development of a supportive and collaborative knowledge sharing culture to drive the successful adoption of technology solutions for knowledge management. Providing access to informal, tacit knowledge as well as formal, documented, explicit knowledge by facilitating internal and external collaboration and communications.",
      ],
      "examples": [
        "Uses existing methods and tools.",
        "Uses the tools and techniques for specific areas of release and deployment activities.",
        "Maintains a knowledge management database by leveraging knowledge of a specialism in order to capture and classify content, taking expert advice when required.",
      ],
    }, {
      "summary": "Assist",
      "signals": [
        "Methords & Tooling: Ensuring that appropriate methods and tools for the planning, development, testing, operation, management and maintenance of systems are adopted and used effectively throughout the organisation.",
        "Release & Deployment: The management of the processes, systems and functions to package, build, test and deploy changes and updates (which are bounded as “releases”) into a live environment, establishing or continuing the specified Service, to enable controlled and effective handover to Operations and the user community.",
        "Knowledge Management: The systematic management of vital knowledge to create value for the organisation by capturing, sharing, developing and exploiting the collective knowledge of the organisation to improve performance, support decision making and mitigate risks. The development of a supportive and collaborative knowledge sharing culture to drive the successful adoption of technology solutions for knowledge management. Providing access to informal, tacit knowledge as well as formal, documented, explicit knowledge by facilitating internal and external collaboration and communications.",
      ],
      "examples": [
        "Provides support on the use of existing methods and tools.",
        "Uses the tools and techniques for specific areas of release and deployment activities. May carry out early life support activities such as providing support advice to initial users.",
        "Maintains knowledge management systems and content to meet business needs. Supports others to enable them to complete knowledge management activities and form knowledge management habits. Reports on progress of knowledge management activities. Configures and develops knowledge management systems and standards. Supports changes to work practices to support capture and use of knowledge.",
      ],
    }, {
      "summary": "Apply",
      "signals": [
        "Methords & Tooling: Ensuring that appropriate methods and tools for the planning, development, testing, operation, management and maintenance of systems are adopted and used effectively throughout the organisation.",
        "Release & Deployment: The management of the processes, systems and functions to package, build, test and deploy changes and updates (which are bounded as “releases”) into a live environment, establishing or continuing the specified Service, to enable controlled and effective handover to Operations and the user community.",
        "Knowledge Management: The systematic management of vital knowledge to create value for the organisation by capturing, sharing, developing and exploiting the collective knowledge of the organisation to improve performance, support decision making and mitigate risks. The development of a supportive and collaborative knowledge sharing culture to drive the successful adoption of technology solutions for knowledge management. Providing access to informal, tacit knowledge as well as formal, documented, explicit knowledge by facilitating internal and external collaboration and communications.",
      ],
      "examples": [
        "Provides support on the use of existing methods and tools. Configures methods and tools within a known context. Creates and updates the documentation of methods and tools.",
        "Uses the tools and techniques for specific areas of release and deployment activities. Administers the recording of activities, logging of results and documents technical activity undertaken. May carry out early life support activities such as providing support advice to initial users.",
        "Organises knowledge assets and oversees the lifecycle of identifying, capturing, classifying, storing and maintaining assets. Facilitates sharing, collaboration and communication of knowledge. Monitors the use and impact of knowledge; interrogates existing knowledge content to identify issues, risks and opportunities. Implements specific knowledge management initiatives.",
      ],
    }, {
      "summary": "Enable",
      "signals": [
        "Methords & Tooling: Ensuring that appropriate methods and tools for the planning, development, testing, operation, management and maintenance of systems are adopted and used effectively throughout the organisation.",
        "Release & Deployment: The management of the processes, systems and functions to package, build, test and deploy changes and updates (which are bounded as “releases”) into a live environment, establishing or continuing the specified Service, to enable controlled and effective handover to Operations and the user community.",
        "Knowledge Management: The systematic management of vital knowledge to create value for the organisation by capturing, sharing, developing and exploiting the collective knowledge of the organisation to improve performance, support decision making and mitigate risks. The development of a supportive and collaborative knowledge sharing culture to drive the successful adoption of technology solutions for knowledge management. Providing access to informal, tacit knowledge as well as formal, documented, explicit knowledge by facilitating internal and external collaboration and communications.",
        "Systems development management: The planning, estimating and execution of programmes of systems development work to time, budget and quality targets. The identification of the resources needed for systems development and how this will be met with an effective supply capacity. The alignment of systems development activity and deliverables with agreed architectures and standards. The development of roadmaps to communicate future systems development plans. The adoption and adaptation of systems development lifecycle models based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
      ],
      "examples": [
        "Provides advice and guidance to support adoption of methods and tools and adherence to policies and standards. Tailors processes in line with agreed standards and evaluation of methods and tools. Reviews and improves usage and application of methods and tools.",
        "Assesses and analyses release components. Provides input to scheduling. Carries out the builds and tests in coordination with testers and component specialists maintaining and administering the tools and methods – manual or automatic - and ensuring, where possible, information exchange with configuration management. Ensures release processes and procedures are maintained.",
        "Provides advice, guidance, and support to help people to adopt and embed best-practice approaches to information and knowledge management into all areas of their work. Evaluates and selects appropriate knowledge management methods and tools in line with agreed policies and standards. Promotes collaborative technologies, processes and behaviours to facilitate sharing of ideas and work-knowledge among internal teams and external partners. Provides support for the establishment and nurturing of communities of practice, including workshops, one-on-one guidance, and troubleshooting. Develops and implements processes and behaviours which help people easily access and use data, learning, and knowledge to improve performance. Shares ideas and examples of existing practices to encourage adoption. Implements knowledge management at programme, project and team level including tailoring in line with agreed standards. Contributes to the definition of organisational policies, standards, and guidelines for knowledge management.",
        "Defines systems development projects which support the organisation's objectives and plans. Selects, adopts and adapts appropriate systems development methods, tools and techniques selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches. Ensures that senior management is both aware of and able to provide the required resources. Facilitates availability and optimum utilisation of resources. Monitors and reports on the progress of development projects, ensuring that projects are carried out in accordance with agreed architectures, standards, methods and procedures (including secure software development). Develops road maps to communicate future development activity.",
      ],
    }, {
      "summary": "Advise/Ensure",
      "signals": [
        "Methords & Tooling: Ensuring that appropriate methods and tools for the planning, development, testing, operation, management and maintenance of systems are adopted and used effectively throughout the organisation.",
        "Release & Deployment: The management of the processes, systems and functions to package, build, test and deploy changes and updates (which are bounded as “releases”) into a live environment, establishing or continuing the specified Service, to enable controlled and effective handover to Operations and the user community.",
        "Knowledge Management: The systematic management of vital knowledge to create value for the organisation by capturing, sharing, developing and exploiting the collective knowledge of the organisation to improve performance, support decision making and mitigate risks. The development of a supportive and collaborative knowledge sharing culture to drive the successful adoption of technology solutions for knowledge management. Providing access to informal, tacit knowledge as well as formal, documented, explicit knowledge by facilitating internal and external collaboration and communications.",
        "Systems development management: The planning, estimating and execution of programmes of systems development work to time, budget and quality targets. The identification of the resources needed for systems development and how this will be met with an effective supply capacity. The alignment of systems development activity and deliverables with agreed architectures and standards. The development of roadmaps to communicate future systems development plans. The adoption and adaptation of systems development lifecycle models based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
      ],
      "examples": [
        "Provides advice, guidance and expertise to promote adoption of methods and tools and adherence to policies and standards. Evaluates and selects appropriate methods and tools in line with agreed policies and standards. Implements methods and tools at programme, project and team level including selection and tailoring in line with agreed standards. Manages reviews of the benefits and value of methods and tools. Identifies and recommends improvements. Contributes to organisational policies, standards, and guidelines for methods and tools.",
        "Leads the assessment, analysis, planning and design of release packages, including assessment of risk. Liaises with business and IT partners on release scheduling and communication of progress. Conducts post release reviews. Ensures release processes and procedures are applied and that releases can be rolled back as needed. Identifies, evaluates and manages the adoption of appropriate release and deployment tools, techniques and processes (including automation).",
        "Develops organisational policies, standards, and guidelines for knowledge management which allow organisations to respond quickly, to deliver services, make decisions and take actions. Champions and leads in the development of an organisational knowledge management approach and supporting technologies, processes and behaviours. Promotes knowledge-sharing through the organisation's operational business processes and systems. Monitors and evaluates knowledge-sharing initiatives, including external bench-marking. Manages reviews of the benefits and value of knowledge management. Identifies and recommends improvements. Creates the business case justification for investment in knowledge management; identifies alternative solutions, assesses feasibility. Shares experiences across communities of practice, business units, and networks on innovative approaches in knowledge sharing.",
        "Sets policy and drives adherence to standards for systems development projects whether predictive (plan-driven) approaches or more adaptive (iterative/agile) approaches. Promotes the benefits of addressing all security issues during systems development. Identifies and manages the resources necessary for all stages (planning, estimation, execution) of systems development projects, ensuring that technical, financial and quality targets are met.",
      ],
    }, {
      "summary": "Initiate/Influence",
      "signals": [
        "Methords & Tooling: Ensuring that appropriate methods and tools for the planning, development, testing, operation, management and maintenance of systems are adopted and used effectively throughout the organisation.",
        "Release & Deployment: The management of the processes, systems and functions to package, build, test and deploy changes and updates (which are bounded as “releases”) into a live environment, establishing or continuing the specified Service, to enable controlled and effective handover to Operations and the user community.",
        "Knowledge Management: The systematic management of vital knowledge to create value for the organisation by capturing, sharing, developing and exploiting the collective knowledge of the organisation to improve performance, support decision making and mitigate risks. The development of a supportive and collaborative knowledge sharing culture to drive the successful adoption of technology solutions for knowledge management. Providing access to informal, tacit knowledge as well as formal, documented, explicit knowledge by facilitating internal and external collaboration and communications.",
        "Systems development management: The planning, estimating and execution of programmes of systems development work to time, budget and quality targets. The identification of the resources needed for systems development and how this will be met with an effective supply capacity. The alignment of systems development activity and deliverables with agreed architectures and standards. The development of roadmaps to communicate future systems development plans. The adoption and adaptation of systems development lifecycle models based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
      ],
      "examples": [
        "Develops organisational policies, standards, and guidelines for methods and tools. Sets direction and leads in the introduction and use of techniques, methodologies and tools, to match overall business requirements, ensuring consistency across all user groups. Leads the development of organisational capabilities for methods and tools (including automation) to ensure adoption and adherence to policies and standards.",
        "Sets the release policy for the organisation in the context of both development and production/operations. Ensures that management processes, tools, techniques and resources (including automation) are in place to ensure that the transition of services, service components and packages are planned and compliant and that test and validation and configuration management are partnered in all release and deployment activities. Provides authorisation for critical release activity and point of escalation.",
        "Leads the creation of a knowledge management culture. Develops an organisation-wide knowledge management strategy for capturing, organising and developing information, knowledge and stories from employees, customers and external partners. Embeds knowledge management across business units and develops strategic knowledge management capabilities. Reinforces the importance of knowledge sharing by aligning individual and organisational objectives and rewards. Identifies opportunities for strategic relationships or partnerships with customers, suppliers, and partners.",
        "Leads the definition, implementation and review of the organisation’s systems development management framework. Authorises the structure of systems development functions and platforms and is responsible for alignment with business strategy & objectives and with emerging IT and digital opportunities. Sets strategy for resource management within systems development, authorises the allocation of resources for systems development programmes, and maintains an overview of the contribution of such programmes to organisational success. Manages the quality and appropriateness of the work performed and delivers measurable business benefits.",
      ],
    }],
  },

  "SECURITY": {
    "displayName": "Security & Architecture",
    "category": "ENG",
    "description": "",
    "milestones": [{
      "summary": "Follow",
      "signals": [
        "Information security: The selection, design, justification, implementation and operation of controls and management strategies to maintain the security, confidentiality, integrity, availability, accountability and relevant compliance of information systems with legislation, regulation and relevant standards.",
        "Solution architecture: The design and communication of high-level structures to enable and guide the design and development of integrated solutions that meet current and future business needs. In addition to technology components, solution architecture encompasses changes to service, process, organisation, and operating models. Architecture definition must demonstrate how requirements (such as automation of business processes) are met, any requirements which are not fully met, and any options or considerations which require a business decision. The provision of comprehensive guidance on the development of, and modifications to, solution components to ensure that they take account of relevant architectures, strategies, policies, standards and practices (including security) and that existing and planned solution components remain compatible.",
      ],
      "examples": [
        "Performs basic risk assessments for small information systems. Contributes to vulnerability assessments. Applies and maintains specific security controls as required by organisational policy and local risk assessments. ",
        "Understands client arcitecture.",
      ],
    }, {
      "summary": "Assist",
      "signals": [
        "Information security: The selection, design, justification, implementation and operation of controls and management strategies to maintain the security, confidentiality, integrity, availability, accountability and relevant compliance of information systems with legislation, regulation and relevant standards.",
        "Solution architecture: The design and communication of high-level structures to enable and guide the design and development of integrated solutions that meet current and future business needs. In addition to technology components, solution architecture encompasses changes to service, process, organisation, and operating models. Architecture definition must demonstrate how requirements (such as automation of business processes) are met, any requirements which are not fully met, and any options or considerations which require a business decision. The provision of comprehensive guidance on the development of, and modifications to, solution components to ensure that they take account of relevant architectures, strategies, policies, standards and practices (including security) and that existing and planned solution components remain compatible.",
      ],
      "examples": [
        "Communicates information security risks and issues to business managers and others. Performs basic risk assessments for small information systems. Contributes to vulnerability assessments. Applies and maintains specific security controls as required by organisational policy and local risk assessments. Investigates suspected attacks. Responds to security breaches in line with security policy and records the incidents and action taken.",
        "Understands client arcitecture and can assist in implementing basic infrastructure.",
      ],
    }, {
      "summary": "Apply",
      "signals": [
        "Information security: The selection, design, justification, implementation and operation of controls and management strategies to maintain the security, confidentiality, integrity, availability, accountability and relevant compliance of information systems with legislation, regulation and relevant standards.",
        "Solution architecture: The design and communication of high-level structures to enable and guide the design and development of integrated solutions that meet current and future business needs. In addition to technology components, solution architecture encompasses changes to service, process, organisation, and operating models. Architecture definition must demonstrate how requirements (such as automation of business processes) are met, any requirements which are not fully met, and any options or considerations which require a business decision. The provision of comprehensive guidance on the development of, and modifications to, solution components to ensure that they take account of relevant architectures, strategies, policies, standards and practices (including security) and that existing and planned solution components remain compatible.",
      ],
      "examples": [
        "Explains the purpose of and provides advice and guidance on the application and operation of elementary physical, procedural and technical security controls. Performs security risk, vulnerability assessments, and business impact analysis for medium complexity information systems. Investigates suspected attacks and manages security incidents. Uses forensics where appropriate.",
        "Supports a change programme or project through the preparation of technical plans and application of design principles that comply with enterprise and solution architecture standards (including security).",
      ],
    }, {
      "summary": "Enable",
      "signals": [
        "Information security: The selection, design, justification, implementation and operation of controls and management strategies to maintain the security, confidentiality, integrity, availability, accountability and relevant compliance of information systems with legislation, regulation and relevant standards.",
        "Solution architecture: The design and communication of high-level structures to enable and guide the design and development of integrated solutions that meet current and future business needs. In addition to technology components, solution architecture encompasses changes to service, process, organisation, and operating models. Architecture definition must demonstrate how requirements (such as automation of business processes) are met, any requirements which are not fully met, and any options or considerations which require a business decision. The provision of comprehensive guidance on the development of, and modifications to, solution components to ensure that they take account of relevant architectures, strategies, policies, standards and practices (including security) and that existing and planned solution components remain compatible.",
      ],
      "examples": [
        "Provides advice and guidance on security strategies to manage identified risks and ensure adoption and adherence to standards. Obtains and acts on vulnerability information and conducts security risk assessments, business impact analysis and accreditation on complex information systems. Investigates major breaches of security, and recommends appropriate control improvements. Contributes to development of information security policy, standards and guidelines.",
        "Contributes to the development of solution architectures in specific business, infrastructure or functional areas. Identifies and evaluates alternative architectures and the trade-offs in cost, performance and scalability. Produces specifications of cloud-based or on-premises components, tiers and interfaces, for translation into detailed designs using selected services and products. Supports a change programme or project through the preparation of technical plans and application of design principles that comply with enterprise and solution architecture standards (including security).",
      ],
    }, {
      "summary": "Advise/Ensure",
      "signals": [
        "Information security: The selection, design, justification, implementation and operation of controls and management strategies to maintain the security, confidentiality, integrity, availability, accountability and relevant compliance of information systems with legislation, regulation and relevant standards.",
        "Solution architecture: The design and communication of high-level structures to enable and guide the design and development of integrated solutions that meet current and future business needs. In addition to technology components, solution architecture encompasses changes to service, process, organisation, and operating models. Architecture definition must demonstrate how requirements (such as automation of business processes) are met, any requirements which are not fully met, and any options or considerations which require a business decision. The provision of comprehensive guidance on the development of, and modifications to, solution components to ensure that they take account of relevant architectures, strategies, policies, standards and practices (including security) and that existing and planned solution components remain compatible.",
      ],
      "examples": [
        "Develops and communicates corporate information security policy, standards and guidelines. Contributes to the development of organisational strategies that address information control requirements. Identifies and monitors environmental and market trends and pro-actively assesses impact on business strategies, benefits and risks. Leads the provision of authoritative advice and guidance on the requirements for security controls in collaboration with experts in other functions such as legal, technical support. Ensures architectural principles are applied during design to reduce risk and drives adoption and adherence to policy, standards and guidelines.",
        "Leads the development of solution architectures in specific business, infrastructure or functional areas. Ensures that appropriate tools and methods are available, understood and employed in architecture development. Within a change programme, leads the preparation of technical plans and, in liaison with business assurance and project staff, ensures that appropriate technical resources are made available. Provides advice on technical aspects of solution development and integration (including requests for changes, deviations from specifications, etc.) and ensures that relevant technical strategies, policies, standards and practices (including security) are applied correctly.",
      ],
    }, {
      "summary": "Initiate/Influence",
      "signals": [
        "Information security: The selection, design, justification, implementation and operation of controls and management strategies to maintain the security, confidentiality, integrity, availability, accountability and relevant compliance of information systems with legislation, regulation and relevant standards.",
        "Solution architecture: The design and communication of high-level structures to enable and guide the design and development of integrated solutions that meet current and future business needs. In addition to technology components, solution architecture encompasses changes to service, process, organisation, and operating models. Architecture definition must demonstrate how requirements (such as automation of business processes) are met, any requirements which are not fully met, and any options or considerations which require a business decision. The provision of comprehensive guidance on the development of, and modifications to, solution components to ensure that they take account of relevant architectures, strategies, policies, standards and practices (including security) and that existing and planned solution components remain compatible.",
      ],
      "examples": [
        "Directs the development, implementation, delivery and support of an enterprise information security strategy aligned to the strategic requirements of the business. Ensures compliance between business strategies and information security and leads the provision of information security resources expertise, guidance and systems necessary to execute strategic and operational plans across all of the organisation's information systems.",
        "Leads the development of architectures for complex solutions, ensuring consistency with specified requirements agreed with both external, and internal customers. Takes full responsibility for the balance between functional, service quality and systems management requirements within a significant area of the organisation. Establishes policy and strategy for the selection of solution architecture components, and co-ordinates design activities, promoting the discipline to ensure consistency. Ensures that appropriate standards (corporate, industry, national and international) are adhered to. Within a business change programme, manages the target design, policies and standards, working proactively to maintain a stable, viable architecture and ensure consistency of design across projects within the programme.",
      ],
    }],
  },

  "USINGDATA": {
    "displayName": "Using Data",
    "category": "DATA",
    "description": "",
    "milestones": [{
      "summary": "Follow",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Assist",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Apply",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Enable",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Advise/Ensure",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Initiate/Influence",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "TERMINOLOGY": {
    "displayName": "Termiology",
    "category": "DATA",
    "description": "",
    "milestones": [{
      "summary": "Follow",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Assist",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Apply",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Enable",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Advise/Ensure",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Initiate/Influence",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "ANALYSIS": {
    "displayName": "Analysis",
    "category": "DATA",
    "description": "",
    "milestones": [{
      "summary": "Follow",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Assist",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Apply",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Enable",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Advise/Ensure",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Initiate/Influence",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "GOVERNANCE": {
    "displayName": "GOVERNANCE",
    "category": "DATA",
    "description": "",
    "milestones": [{
      "summary": "Follow",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Assist",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Apply",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Enable",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Advise/Ensure",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Initiate/Influence",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "CLIENTS": {
    "displayName": "Clients",
    "category": "COMMERCIAL",
    "description": "",
    "milestones": [{
      "summary": "Follow",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Assist",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Apply",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Enable",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Advise/Ensure",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Initiate/Influence",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "FINANCIAL": {
    "displayName": "Financial",
    "category": "COMMERCIAL",
    "description": "",
    "milestones": [{
      "summary": "Follow",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Assist",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Apply",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Enable",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Advise/Ensure",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Initiate/Influence",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "SALES": {
    "displayName": "Sales",
    "category": "COMMERCIAL",
    "description": "",
    "milestones": [{
      "summary": "Follow",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Assist",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Apply",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Enable",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Advise/Ensure",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Initiate/Influence",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "BUSINESS": {
    "displayName": "Business",
    "category": "COMMERCIAL",
    "description": "",
    "milestones": [{
      "summary": "Follow",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Assist",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Apply",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Enable",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Advise/Ensure",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Initiate/Influence",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "PROFESSIONAL",
    "description": "",
    "milestones": [{
      "summary": "Follow",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Assist",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Apply",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Enable",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Advise/Ensure",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Initiate/Influence",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "TEAMWORK": {
    "displayName": "TEAMWORK",
    "category": "PROFESSIONAL",
    "description": "",
    "milestones": [{
      "summary": "Follow",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Assist",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Apply",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Enable",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Advise/Ensure",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Initiate/Influence",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "PROBELMSOLVING": {
    "displayName": "Probelem Solving",
    "category": "PROFESSIONAL",
    "description": "",
    "milestones": [{
      "summary": "Follow",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Assist",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Apply",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Enable",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Advise/Ensure",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Initiate/Influence",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "INFLUENCING": {
    "displayName": "Leading and Influencing",
    "category": "PROFESSIONAL",
    "description": "",
    "milestones": [{
      "summary": "Follow",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Assist",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Apply",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Enable",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Advise/Ensure",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "Initiate/Influence",
      "signals": [
          "Area One",
          "Area Two",
          "Area Three",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  }
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#999', '#5b58a7', '#5cdcc1', '#ff8b27'])

export const titles = [
  {label: 'Associate Engineer (Follow)', minPoints: 0, maxPoints: 16},
  {label: 'Data Engineer (Assist)', minPoints: 17, maxPoints: 35},
  {label: 'Data Engineer (Apply)', minPoints: 36, maxPoints: 57},
  {label: 'Senior Data Engineer (Enable)', minPoints: 58, maxPoints: 89},
  {label: 'Engineering Manager / Principal Engineer (Advise/Ensure)', minPoints: 90, maxPoints: 109},
  {label: 'Head of Engineering / Chief Engineer (Initiate/Influence)', minPoints: 110}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
