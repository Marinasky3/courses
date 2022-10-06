import { ICourse } from '../Interfaces/Interfaces'
import programmingIng from '../images/programming.webp'
import geography from '../images/geography.jpeg'
import law from '../images/law.jpeg'
import vet from '../images/vet.png'
import science from '../images/science.jpeg'
import old_languges from '../images/old_languges.jpg'
import medicine from '../images/medicine.jpeg'
import politics from '../images/politics.jpeg'
import math from '../images/math.png'
// import  from '../images/'

const data: Array<ICourse> = [
  {
    name: 'Computer Science',
    date: '2022-01-26T13:51:50.417-07:00',
    isComplete: true,
    courseId: 123,
    description:
      'Our course is broad and deep – giving skills to create future technology. All aspects of modern computer science are covered, along with the underlying theory and foundations in economics, law and business. You also develop practical skills, such as programming (in various languages, eg OCaml, Java, C/C++, Prolog) and hardware systems (eg chip design using Verilog).',
    image: programmingIng,
    topics:[
        {
            name: 'CSS',
            date: '2021-12-01T13:51:50.417-07:00',
            isComplete: true,
            note: 'Hello',
            description:'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.'

        },
        {
            name: 'HTML',
            date: '2021-12-03T13:51:50.417-07:00',
            isComplete: true,
            description:'HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn',
            note: '',

        },
        {
            name: 'JavaScript',
            date: '2021-12-05T13:51:50.417-07:00',
            isComplete: true,
            description:'JavaScript often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
            note: '',

        },
        {
            name: 'React',
            date: '2021-12-08T13:51:50.417-07:00',
            isComplete: true,
            description:'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
            note: '',
        },
        {
            name: 'Angular',
            date: '2021-12-13T13:51:50.417-07:00',
            isComplete: true,
            description:'Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            note: '',
        }
    ]
  },
  {
    name: 'Geography',
    date: '2022-08-26T13:51:50.417-07:00',
    isComplete: true,
    courseId: 231,
    description:
      'Geographers study some of the biggest challenges facing our planet, from food security, climate and biodiversity emergencies to pandemics and globalisation, and social inequalities and urbanisation to volcanoes and melting ice sheets. Our Geography course tackles these issues. You do not have to choose whether to specialise in physical or human geography as you can do both in all three years.',
    image: geography,
    topics:[
        {
            name: 'CSS',
            date: '2022-08-01T13:51:50.417-07:00',
            isComplete: true,
            description:'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
            note: '',

        },
        {
            name: 'HTML',
            date: '2022-08-03T13:51:50.417-07:00',
            isComplete: true,
            description:'HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn',
            note: '',

        },
        {
            name: 'JavaScript',
            date: '2022-08-05T13:51:50.417-07:00',
            isComplete: true,
            description:'JavaScript often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
            note: '',

        },
        {
            name: 'React',
            date: '2022-08-08T13:51:50.417-07:00',
            isComplete: false,
            description:'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
            note: '',
        },
        {
            name: 'Angular',
            date: '2022-08-13T13:51:50.417-07:00',
            isComplete: true,
            description:'Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            note: '',
        }
    ]
  },
  {
    name: 'Medicine (Graduate Course)',
    date: '2023-01-17T13:51:50.417-07:00',
    isComplete: false,
    description:
      "Our courses are intellectually stimulating and professionally challenging. As a medical student, you'll experience a rigorous, evidence-based medical education within the research-rich environment of the University. Students have opportunities to pursue research and project work throughout the courses.",
    courseId: 456,
    image: medicine,
    topics:[
        {
            name: 'CSS',
            date: '2023-01-01T13:51:50.417-07:00',
            isComplete: true,
            description:'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
            note: '',

        },
        {
            name: 'HTML',
            date: '2023-01-03T13:51:50.417-07:00',
            isComplete: false,
            description:'HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn',
            note: '',

        },
        {
            name: 'JavaScript',
            date: '2023-01-05T13:51:50.417-07:00',
            isComplete: false,
            description:'JavaScript often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
            note: '',

        },
        {
            name: 'React',
            date: '2023-01-08T13:51:50.417-07:00',
            isComplete: false,
            description:'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
            note: '',
        },
        {
            name: 'Angular',
            date: '2023-01-13T13:51:50.417-07:00',
            isComplete: false,
            description:'Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            note: '',
        }
    ]
  },
  {
    name: 'History and Politics',
    date: '2021-06-01T13:51:50.417-07:00',
    isComplete: true,
    description:
      'Our course provides the opportunity to undertake intensive study in political science, the history of political thought, a wide variety of modern British, European, American and world history, conceptual issues in political science, and quantitative methods.',
    courseId: 654,
    image: politics,
    topics:[
        {
            name: 'CSS',
            date: '2022-08-01T13:51:50.417-07:00',
            isComplete: true,
            description:'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
            note: '',

        },
        {
            name: 'HTML',
            date: '2022-08-03T13:51:50.417-07:00',
            isComplete: true,
            description:'HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn',
            note: '',

        },
        {
            name: 'JavaScript',
            date: '2022-08-05T13:51:50.417-07:00',
            isComplete: true,
            description:'JavaScript often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
            note: '',

        },
        {
            name: 'React',
            date: '2022-08-08T13:51:50.417-07:00',
            isComplete: false,
            description:'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
            note: '',
        },
        {
            name: 'Angular',
            date: '2022-08-13T13:51:50.417-07:00',
            isComplete: true,
            description:'Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            note: '',
        }
    ]
  },
  {
    name: 'Natural Sciences ',
    date: '2021-03-03T13:51:50.417-07:00',
    isComplete: true,
    description:
      'The breadth of the course reflects the blurring of boundaries between the different sciences and before committing yourself to one department you study a variety of subjects, some of which may be new to you. This means you can change your mind about which subject to specialise in.',
    courseId: 546,
    image: science,
    topics:[
        {
            name: 'CSS',
            date: '2022-08-01T13:51:50.417-07:00',
            isComplete: true,
            description:'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
            note: '',

        },
        {
            name: 'HTML',
            date: '2022-08-03T13:51:50.417-07:00',
            isComplete: true,
            description:'HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn',
            note: '',

        },
        {
            name: 'JavaScript',
            date: '2022-08-05T13:51:50.417-07:00',
            isComplete: true,
            description:'JavaScript often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
            note: '',

        },
        {
            name: 'React',
            date: '2022-08-08T13:51:50.417-07:00',
            isComplete: false,
            description:'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
            note: '',
        },
        {
            name: 'Angular',
            date: '2022-08-13T13:51:50.417-07:00',
            isComplete: true,
            description:'Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            note: '',
        }
    ]
  },
  {
    name: 'Mathematics',
    date: '2023-01-26T13:51:50.417-07:00',
    isComplete: false,
    description:
      'Two aspects of the course that our students greatly appreciate are its flexibility and the breadth of subjects offered. The amount of choice increases each year and after Year 1 you can choose the number of options you study. Some students take as many options as they can; others take fewer and study them very thoroughly.',
    courseId: 643,
    image: math,
    topics:[
        {
            name: 'CSS',
            date: '2023-01-01T13:51:50.417-07:00',
            isComplete: true,
            description:'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
            note: '',

        },
        {
            name: 'HTML',
            date: '2023-01-03T13:51:50.417-07:00',
            isComplete: false,
            description:'HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn',
            note: '',

        },
        {
            name: 'JavaScript',
            date: '2023-01-05T13:51:50.417-07:00',
            isComplete: false,
            description:'JavaScript often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
            note: '',

        },
        {
            name: 'React',
            date: '2023-01-08T13:51:50.417-07:00',
            isComplete: false,
            description:'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
            note: '',
        },
        {
            name: 'Angular',
            date: '2023-01-13T13:51:50.417-07:00',
            isComplete: false,
            description:'Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            note: '',
        }
    ]
    
  },
  {
    name: 'Land Economy',
    date: '2022-05-21T13:51:50.417-07:00',
    isComplete: true,
    description:
      'Land Economy is intellectually challenging – encompassing law and economics, with aspects of the environment, business finance and resource management – and offers many excellent career opportunities.',
    courseId: 156,
    image: law,
    topics:[
        {
            name: 'CSS',
            date: '2022-08-01T13:51:50.417-07:00',
            isComplete: true,
            description:'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
            note: '',

        },
        {
            name: 'HTML',
            date: '2022-08-03T13:51:50.417-07:00',
            isComplete: true,
            description:'HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn',
            note: '',

        },
        {
            name: 'JavaScript',
            date: '2022-08-05T13:51:50.417-07:00',
            isComplete: true,
            description:'JavaScript often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
            note: '',

        },
        {
            name: 'React',
            date: '2022-08-08T13:51:50.417-07:00',
            isComplete: false,
            description:'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
            note: '',
        },
        {
            name: 'Angular',
            date: '2022-08-13T13:51:50.417-07:00',
            isComplete: true,
            description:'Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            note: '',
        }
    ]
  },
  {
    name: 'Engineering',
    date: '2022-10-11T13:51:50.417-07:00',
    isComplete: true,
    description:
      'Engineering is about designing processes and making products to solve real-world problems. Our course enables you to develop your engineering knowledge, skills, imagination and experience to the highest levels in readiness for your future career. When you graduate, you’re fully qualified in your chosen area, knowledgeable across the range of engineering disciplines, and able to apply new technologies in novel situations.',
    courseId: 135,
    image: programmingIng,
    topics:[
        {
            name: 'CSS',
            date: '2022-08-01T13:51:50.417-07:00',
            isComplete: true,
            description:'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
            note: '',

        },
        {
            name: 'HTML',
            date: '2022-08-03T13:51:50.417-07:00',
            isComplete: true,
            description:'HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn',
            note: '',

        },
        {
            name: 'JavaScript',
            date: '2022-08-05T13:51:50.417-07:00',
            isComplete: true,
            description:'JavaScript often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
            note: '',

        },
        {
            name: 'React',
            date: '2022-08-08T13:51:50.417-07:00',
            isComplete: false,
            description:'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
            note: '',
        },
        {
            name: 'Angular',
            date: '2022-08-13T13:51:50.417-07:00',
            isComplete: true,
            description:'Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            note: '',
        }
    ]
  },
  {
    name: 'Modern and Medieval Languages',
    date: '2022-08-01T13:51:50.417-07:00',
    isComplete: true,
    description:
      'All our students study two languages, one of which can be learnt from scratch (the exceptions being French and Latin, for which A Level/IB Higher Level standard is required). No matter what your proficiency when you arrive, you leave with near native-speaker competence in at least one of your languages. Most of our language classes are run by native speakers.',
    courseId: 413,
    image: old_languges,
    topics:[
        {
            name: 'CSS',
            date: '2022-08-01T13:51:50.417-07:00',
            isComplete: true,
            description:'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
            note: '',

        },
        {
            name: 'HTML',
            date: '2022-08-03T13:51:50.417-07:00',
            isComplete: true,
            description:'HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn',
            note: '',

        },
        {
            name: 'JavaScript',
            date: '2022-08-05T13:51:50.417-07:00',
            isComplete: true,
            description:'JavaScript often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
            note: '',

        },
        {
            name: 'React',
            date: '2022-08-08T13:51:50.417-07:00',
            isComplete: false,
            description:'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
            note: '',
        },
        {
            name: 'Angular',
            date: '2022-08-13T13:51:50.417-07:00',
            isComplete: true,
            description:'Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            note: '',
        }
    ]
  },
  {
    name: 'Veterinary Medicine',
    date: '2023-01-07T13:51:50.417-07:00',
    isComplete: false,
    description:
      'Cambridge offers a world class opportunity to study the scientific basis of veterinary medicine and clinical veterinary science. Our course provides the fundamental building blocks on which to develop and excel in any veterinary field.',
    courseId: 542,
    image: vet,
    topics:[
        {
            name: 'CSS',
            date: '2023-01-01T13:51:50.417-07:00',
            isComplete: true,
            description:'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
            note: '',

        },
        {
            name: 'HTML',
            date: '2023-01-03T13:51:50.417-07:00',
            isComplete: false,
            description:'HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn',
            note: '',

        },
        {
            name: 'JavaScript',
            date: '2023-01-05T13:51:50.417-07:00',
            isComplete: false,
            description:'JavaScript often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
            note: '',

        },
        {
            name: 'React',
            date: '2023-01-08T13:51:50.417-07:00',
            isComplete: false,
            description:'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
            note: '',
        },
        {
            name: 'Angular',
            date: '2023-01-13T13:51:50.417-07:00',
            isComplete: false,
            description:'Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            note: '',
        }
    ]
  },
]

export const apiGetCourses: Promise<ICourse[]> = new Promise(resolve => {
  setTimeout(() => {
    const courses: Array<ICourse> = data
    resolve(courses)
  }, 500)
})

export const apiGetCourse = (id: number)=> {
  const promise = new Promise<ICourse | undefined>((res) => {
    setTimeout(() => {
      const course:ICourse | undefined = data.find(el => el.courseId === id)
      res(course)
    }, 500)
  })
  return promise
}

