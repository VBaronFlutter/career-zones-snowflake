// @flow
import * as d3 from 'd3'

export type TrackId = 'PEOPLE' | 'CULTURE' | 'GAMECHANGER' | 'RESULTS' | 'DIRECTION' | 'STRATEGICAWARENESS' |'ENGINEERING' | 'PROCESS'

export type MilestoneMap = {
  'PEOPLE': Milestone,
  'CULTURE': Milestone,
  'GAMECHANGER': Milestone,
  'RESULTS': Milestone,
  'DIRECTION': Milestone,
  'STRATEGICAWARENESS': Milestone,
  'ENGINEERING': Milestone,
  'PROCESS': Milestone
}
export const milestones = [1, 2, 3, 4, 5]

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

export const tracks: Tracks = {
  "PEOPLE": {
    "displayName": "People",
    "category": "RELATIONS",
    "description": "",
    "milestones": [{
      "summary": "EARLY CAREER",
      "signals": [
      ],
      "examples": [
      ],
    }, {
        "summary": "LEADS SELF",
      "signals": [
          "Is a team player.",
          "Communicates effectively.",
          "Works with a mentor to gain experience.",
          "Is aware of relevant stakeholders.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS INDIVIDUALS / EXPERT / SPECIALIST",
      "signals": [
          "Is a team player.",
          "Communicates effectively.",
          "Actively listens to understand.",
          "Works with a mentor to gain experience.",
          "Mentors within own team.",
          "Develops relationships with relevant stakeholders.",
          "Contribute to retention and succession planning and recruitment.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS LEADERS / LEAD EXPERT",
      "signals": [
          "Is a team player.",
          "Communicates effectively.",
          "Applies active listening.",
          "Develops strong relationships with relevant stakeholders.",
          "Leverages influence to draw support to objectives.",
          "Fostering a culture of mentoring and supports others in their growth as mentors.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS A SUB-FUNCTION / THOUGHT LEADER",
      "signals": [
          "Inspires, gains trust, respect and support of others.",
          "Expert communicator conveying purpose and direction with respect, clarity and enthusiasm.",
          "Has developed strong relationships with all relevant stakeholders.",
          "Promoting wider understanding of strategic initiatives.",
          "Pays attention to non-verbal communication.",
          "Fostering a culture of cross-organisational mentoring.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS A FUNCTION",
      "signals": [
          "Role model for collaborative leadership.",
          "Has the art and flare to influence.",
          "Inspires, gains trust, respect and support of others.",
          "Ensure an infrastructure to support varied communication methods which are cost effective and keep up with advances in technology.",
          "Fosters a culture of concise, effective, audience-oriented communication.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "CULTURE": {
    "displayName": "Culture",
    "category": "RELATIONS",
    "description": "",
    "milestones": [{
        "summary": "EARLY CAREER",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "LEADS SELF",
      "signals": [
        "Builds strong relationships with teammates and manager.",
        "Embraces professionalism, work ethics and mutual respect for colleagues.",
        "Understands the importance of security.",
        "Values diversity and inclusion, ensuring fairness and opportunity for all.",
        "Remain impartial when considering different perspectives.",
      ],
      "examples": [
        "Output One",
        "Output Two",
        "Output Three",
      ],
    }, {
      "summary": "LEADS INDIVIDUALS / EXPERT / SPECIALIST",
      "signals": [
        "Builds strong relationships with teammates, managers and business counterparts.",
        "Approaches all work with a security lens and actively looks for security vulnerabilities.",
        "Values difference, diversity and inclusion, ensuring fairness and opportunity for all.",
        "Looks to define criteria in advance of making a recommendation or decision.",
        "Endeavours to be effective in engaging all relevant parties.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS LEADERS / LEAD EXPERT",
      "signals": [
        "Builds strong relationships with business counterparts to better position the team.",
        "Promotes a security first mindset across teams.",
        "Values difference, diversity and inclusion, ensuring fairness and opportunity for all.",
        "Acts impartiality and remains fair in all situations.",
        "Often defines criteria and identifies relevant perspectives before making a recommendation or decision.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS A SUB-FUNCTION / THOUGHT LEADER",
      "signals": [
        "Maintains impartiality while working with people across the organisation.",
        "Is committed to holding others accountable.",
        "Promotes a security first mindset across the organisation. ",
        "Is a role model for delivery, showing efficiency and focus, while being open to new ideas and honest about challenges.",
        "Drives an inclusive and collaborative working culture which values diversity and encourages openness, approachability and sensitivity.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS A FUNCTION",
      "signals": [
        "Creates an environment where all perspectives are valued and people are encouraged to give their input.",
        "Builds strong relationships outside of the organisation and leverages these to effectively position the business.",
        "Works with the security team to set and refine security strategy.",
        "Drives an inclusive and collaborative working culture which values diversity and encourages openness, approachability and sensitivity.        ",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "GAMECHANGER": {
    "displayName": "Game Changer",
    "category": "OUTCOME",
    "description": "",
    "milestones": [{
        "summary": "EARLY CAREER",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "LEADS SELF",
      "signals": [
        "Remains curious and generates useful and creative ideas and solutions to solve challenges.",
        "Is open to innovations and gets involved in unfamiliar tasks or new areas.",
        "Learns and applies new methods, tools and technologies.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS INDIVIDUALS / EXPERT / SPECIALIST",
      "signals": [
        "Remains curious and generates useful and creative ideas and solutions to solve challenges.",
        "Embraces change with an open-mind and an eagerness to try out new things.",
        "Introduces new ways of looking at problems.",
        "Uses initiative to explore and learn innovative methods, tools and technologies and applies them at work.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS LEADERS / LEAD EXPERT",
      "signals": [
        "Encourages others to be curious, develop and explore innovative solutions and approaches to challenges by applying expertise and fresh thinking.",
        "Champions change with an open mind and an eagerness to try out new things.",
        "Can take a creative idea and put it into practice.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS A SUB-FUNCTION / THOUGHT LEADER",
      "signals": [
        "Takes smart organisational risks to drive game changing innovations.",
        "Champions new initiatives and encourages others to find improved ways to tackle challenges.",
        "Fosters an environment which nurtures diverse thinking to promote curiosity and nurture innovation.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS A FUNCTION",
      "signals": [
        "Takes smart organisational risks to drive game changing innovations.",
        "Invests resources and inspires others to be curious, discover and implement new ideas and solutions.",
        "Creates an environment where innovation is nurtured and rewarded.",
        "Actively removes barriers and practices that hinder creativity.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "RESULTS": {
    "displayName": "Results",
    "category": "OUTCOME",
    "description": "",
    "milestones": [{
        "summary": "EARLY CAREER",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "LEADS SELF",
      "signals": [
        "Contributes to an effective peer review process.",
        "Takes pride in delivering quality work on time, striking the right balance between tackling issues under own initiative and escalating to senior colleagues for support.",
        "Dedicates personal time to development, completing required learning, courses and/or certifications and peer review process.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS INDIVIDUALS / EXPERT / SPECIALIST",
      "signals": [
        "Monitors team health and output using reliable metrics and reports.",
        "Ensures alignment to governance, taking ownership of quality.",
        "Leads related community of practices and champions continuous learning and development.",
        "Leads and drives elaboration of new work.",
        "Actively balances new features against product improvements.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS LEADERS / LEAD EXPERT",
      "signals": [
        "Drives team growth, recruitment and learning initiatives.",
        "Understands other perspectives and is not hesitant to adapt an approach to achieve a successful outcome.",
        "Mostly effective in managing change through applying insights from others and lessons learned from others.",
        "Owns, drives and defines best practices and risks.",
        "Visible in the wider business community, driving awareness of the brand.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS A SUB-FUNCTION / THOUGHT LEADER",
      "signals": [
        "Owns and implements the strategy for the sub-function in alignment with the divisional goals and objectives.",
        "Achieves the strategy through alignment with senior managers and senior team members.",
        "Communicates group vision throughout the sub-function to achieve key results",
        "Coordinates on complex inter tribe projects and initiatives.",
        
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS A FUNCTION",
      "signals": [
        "Sets the vision and strategy in alignment with division and group objectives.",
        "Delivers multiple key big bets for the group through sub-functions.",
        "Reports progress to ExCo.",
        "Creates an environment where people are curious and encourages people to challenge and share views.",
        "Learns and adapts an approach in order to achieve the best outcome.",
        "Manages change skilfully and shows a way forward.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "DIRECTION": {
    "displayName": "Direction",
    "category": "FUTURE",
    "description": "",
    "milestones": [{
        "summary": "EARLY CAREER",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "LEADS SELF",
      "signals": [
        "Supports the tribe strategy through contributions at a squad level.",
        "Demonstrates understanding of performance drivers with guidance from their manager.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS INDIVIDUALS / EXPERT / SPECIALIST",
      "signals": [
        "Understands the business model in relation to current focus area, being able to see opportunities and simplify things.",
        "Participates in the creation of the team roadmap ensuing feedback.",
        "Simplifies tasks through proactive conversations.",
        "Demonstrates understanding of performance drivers.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS LEADERS / LEAD EXPERT",
      "signals": [
        "Creates and update roadmaps across the organisation, based on strategy, constraints and feedback.",
        "Leads by example and improves team knowledge through innovation, coaching and feedback.",
        "Simplifies design through proactive conversations.",
        "Defines and creates new product abilities.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS A SUB-FUNCTION / THOUGHT LEADER",
      "signals": [
        "Grows the sub-function through influencing, owning and backing decisions to set and achieve goals.",
        "Fosters a culture of alignment and accountability through conversations based on organisational strategy and principles.",
        "Ensures the sub-function is continuously working towards its goals.",
        "Raises awareness of how bias impacts decisions.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS A FUNCTION",
      "signals": [
        "Provides holistic leadership.",
        "Refines and grows the business through set strategies, ensuring governance.",
        "Leads strategic decisions and plans with a thorough understanding of the entire business.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "STRATEGICAWARENESS": {
    "displayName": "Strategic Awareness",
    "category": "FUTURE",
    "description": "",
    "milestones": [{
        "summary": "EARLY CAREER",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "LEADS SELF",
      "signals": [
        "Has a clear understanding of the tribe's overall strategy.",
        "Applies what they've learnt to optimise current plans.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS INDIVIDUALS / EXPERT / SPECIALIST",
      "signals": [
        "Provides advanced strategy support and/or execution.",
        "Identifies, drives and executes growth opportunities.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS LEADERS / LEAD EXPERT",
      "signals": [
        "Demonstrates strategic thinking and decision making.",
        "Translates strategic plans while leading key projects.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS A SUB-FUNCTION / THOUGHT LEADER",
      "signals": [
        "Creates and develops longer term strategies that feed into the overall business goals.",
        "Is aware of ongoing industry developments that may impact strategy.",
        "Anticipates future trends and implications.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }, {
      "summary": "LEADS A FUNCTION",
      "signals": [
        "Shapes long term vision for the business or the discipline.",
        "Leads strategic decisions with a thorough understanding of the entire business.",
        "Detect industry wide risks and opportunities and leads large group of people to navigate them.",
      ],
      "examples": [
          "Output One",
          "Output Two",
          "Output Three",
      ],
    }],
  },

  "ENGINEERING": {
    "displayName": "Software Engineering",
    "category": "ENG",
    "description": "",
    "milestones": [{
        "summary": "EARLY CAREER",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "LEADS SELF",
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
      "summary": "LEADS INDIVIDUALS / EXPERT / SPECIALIST",
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
      "summary": "LEADS LEADERS / LEAD EXPERT",
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
      "summary": "LEADS A SUB-FUNCTION / THOUGHT LEADER",
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
      "summary": "LEADS A FUNCTION",
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

    },],
  },

  "PROCESS": {
    "displayName": "Process & Tooling",
    "category": "ENG",
    "description": "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
    "milestones": [{
        "summary": "EARLY CAREER",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "LEADS SELF",
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
      "summary": "LEADS INDIVIDUALS / EXPERT / SPECIALIST",
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
      "summary": "LEADS LEADERS / LEAD EXPERT",
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
      "summary": "LEADS A SUB-FUNCTION / THOUGHT LEADER",
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
      "summary": "LEADS A FUNCTION",
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
  }
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#03bc9c', '#e9c36b', '#f3a162', '#e86f52'])