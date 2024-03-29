export const siteConfig = {
    
    siteName: "Inbound",
    siteSlogan: "From Space, For Earth",
    navbar:[
        {
            name:"Home",
            link:"/"
        },
        {
            name:"About",
            link:"#about"
        },
        {
            name:"Contact",
            link:"#contact"
        }
    ],
    about: {
        title: "What we do?",
        content: "Inbound Aerospace is focused on providing a spacecraft platform that utilizes the unique microgravity environment of space to manufacture revolutionary products that profoundly impact and improve the lives on Earth. We take pride in assisting our customers in producing these innovative products in space and bringing them back to Earth, delivering life-transforming benefits. By harnessing the power of space, we aim to bring the advantages of the cosmos right to our planet."
    },

    aboutCards:{
        title: "WHY INBOUND AEROSPACE ?",
        cards:[
            {
                title:"EVEN SUSPENSION",
                content:"Under gravity, fine particles within a liquid can settle to the bottom, but in space they stay uniformly mixed throughout"
            },
            {
                title:"LACK OF BUOYANCY ",
                content:"On Earth, air bubbles and anything lighter than the liquid they are in float to the surface, but in microgravity they mix evenly."
            },
            {
                title:"LACK OF THERMAL CONVECTION",
                content:"Convection-when hotter(less dense) material rises and cooler material sinks-requires gravity. "
            },
        ]
    },

    impactCards:{
        title:"IMPACT",
        Cards:[
            {
                id:1,
                image:"/assets/nasa.jpg",
                description:"Wide band gap semiconductors for power electronics"
            },
            {
                id:2,
                image:"/assets/nasa.jpg",
                description:"Spherical, soot-free and blue flame"
            },
            {
                id:3,
                image:"/assets/nasa.jpg",
                description:"High - purity protein crystals for pharmaceuticals"
            },
            {
                id:4,
                image:"/assets/nasa.jpg",
                description:" Scaffold-free 3D Bio-printing"
            },
            {
                id:5,
                image:"/assets/nasa.jpg",
                description:"Protein-based artificial retinas"
            },
            {
                id:6,
                image:"/assets/nasa.jpg",
                description:" Wider bandwidth fiber optics"
            },
        ]
    },

    teamCards:{
        title:"MEET OUR TEAM",
        cards:[
            {
                id:1,
                image:"/assets/arvind.png",
                name:"Aravind I B",
                description:"PhD in Dept. of Aerospace Engineering IIT Madras"
            },
            {
                id:2,
                image:"/assets/pandian.png",
                name:"Dr. S Pandian",
                description:"Former Director, Satish Dhawan Space Centre at ISRO Aerodynamics"
            },
            {
                id:3,
                image:"/assets/lalithambika.png",
                name:"Dr. V R Lalithambika",
                description:"Former Director, Directorate of Human Space Programme at ISRO Navigation and Control"
            }
        ]
    },
    videos:[{
        url: "https://www.youtube.com/embed/-H_nYXI_iPc?si=fq0pzXFk5lXnWxn4",
        title: "Inbound Aerospace | Retractable satellite"
    }],
    footer:{
        title: "built with ❤️ by NoCodeClub IIT Madras."
    }
}
