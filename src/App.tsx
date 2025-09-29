import {
  Atom,
  BookOpen,
  CircleDot,
  Database,
  ExternalLink,
  FileCode,
  FileJson,
  FileType2,
  GitBranch,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Palette,
  School,
  Terminal
} from 'lucide-react';
import BackgroundVideo from './components/BackgroundVideo';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Section from './components/Section';
import TypeWriter from './components/TypeWriter';

import profileImg from './images/profile1.png';




function App() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Background Video */}
      <BackgroundVideo />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Section id="home" title="" className="flex items-center justify-center min-h-screen text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">
            <span className="text-gradient-im">I'm</span>
            <span className="text-gradient-name"> Manohar Bokka</span>
          </h1>
          <div className="text-xl text-gray-300 mb-6 h-8 animate-fade-in-delay">
            <TypeWriter
              words={[
                { text: "Full Stack Developer", colorClass: "text-red-500" },
                { text: "Data Science Enthusiastic", colorClass: "text-green-500" },
                { text: "Problem Solver", colorClass: "text-yellow-500" },
                { text: "Tech Innovator", colorClass: "text-purple-500" },
              ]}
              typingSpeed={80}
              deletingSpeed={40}
              delayBetweenWords={2500}
            />
          </div>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed tracking-wide">
            "Transforming ideas into impactful digital solutions. Passionate about building innovative web applications that inspire and drive change."
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/ManoharBokka0208/" target="_blank" rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-125">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/Manohar-Bokka-505329286/" target="_blank" rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-125">
              <Linkedin size={24} />
            </a>
            <a href="mailto:2200030353cseh@gmail.com"
              className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-125">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-delay-3">
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <GraduationCap className="w-8 h-8 mb-3 mx-auto text-blue-400" />
              <h3 className="font-semibold mb-2 text-lg">Undergraduate</h3>
              <p className="text-sm text-gray-400">KL University</p>
              <p className="text-xs text-gray-500">2022-2026</p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <BookOpen className="w-8 h-8 mb-3 mx-auto text-blue-400" />
              <h3 className="font-semibold mb-2 text-lg">Intermediate</h3>
              <p className="text-sm text-gray-400">Sri chaitanya Junior College</p>
              <p className="text-xs text-gray-500">2020-2022</p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <School className="w-8 h-8 mb-3 mx-auto text-blue-400" />
              <h3 className="font-semibold mb-2 text-lg">Schooling</h3>
              <p className="text-sm text-gray-400">sri chaitanya High School</p>
              <p className="text-xs text-gray-500">2019-2020</p>
            </div>
          </div>
        </div>
        
      </Section>

     {/* About Section */}
     <Section id="about-me" title="About Me" className="py-16 bg-gradient-to-b from-black-900 via-gray-900 to-black-900 text-gray-100">
  <div className="flex justify-center">
    <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-6 md:px-12">
      {/* Image Section */}
      <div className="flex justify-center relative">
      <img
  src={profileImg}
  alt="Profile"
  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-xl border-4 border-yellow-500 transform hover:scale-105 transition-transform duration-300"
/>


        <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full w-20 h-20 flex items-center justify-center text-white font-semibold text-xl shadow-lg animate-bounce">
          Hello!
        </div>
      </div>
    
    {/* Text Section */}
    <div>
    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-4">
         Meet Manohar Bokka
    </h2>

      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        I'm a driven and enthusiastic full-stack developer with expertise in building dynamic and user-friendly web applications. With proficiency in technologies like React, Django, I love transforming complex ideas into seamless digital experiences.
      </p>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        I enjoy exploring emerging technologies,and contributing to open-source projects. I'm passionate about creating impactful solutions that make a difference in the tech community.
      </p>
      <div className="flex space-x-4">
       
      </div>
    </div>
  </div>
  </div>
</Section>


     {/* Projects Section */}
     <Section id="projects" title="Projects">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Two cards per column */}
  {[
    {
      id: 1,
      title: "Astrology Prediction",
      description: "A web application that provides astrology predictions based on user input.",
      image: "https://media-hosting.imagekit.io//d9bee8f1d800413f/astrologo.png?Expires=1832335788&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KrSfzrhUiYTO2avRIH8g0LzXJOkcZAhWYIBQSIwjNCkhoiBlMO~EL1ixOG6o3UxvgwF6YeUWMGEwVUfxuV3YJPFh12ffATFm7QAmEcwkbp1bb8rRqUSz2mABHmHcFeLqkh92OZp0xXSZHXI7MTsUVy2kDWCD-Ay5RzlvOCwt2iwQ2gwUsJ3xPtegWWa9jTNUW78nzx1wNCeLiNytcHFaKl3m-wn2TKzLisSOB5RwxG4Apw6OwSxJPb0q3a65-7wpPEZ85NyrtdvG7NhGeqolRk7FiBwIIe~65~vbAQ0gqa4HdkjVZWZpOgg1SA2iTIvf~9G3vkwMtf8SqglTcnwBmQ__", // Replace with the actual online image link
      projectLink: "https://github.com/ManoharBokka0208/AstrologyPredictions",
      githubLink: "https://github.com/ManoharBokka0208/AstrologyPredictions",
    },
    {
      id: 2,
      title: "Airline Reservation System",
      description: "A React-based system for seamless flight booking and management.",
      image: "https://media-hosting.imagekit.io//1b2c51affab94e30/airlogo.png?Expires=1832337508&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RbolFRutLnWQ4P-DI-06ApVrG9zMW2HChpwYHTqBW0X5Nvaf0YjRo6IC1Fgf7he0trh5Oml2qPtoOTzCaxGtuln0OkYVEMbgSbb64VDvBonwmiQxd029nM1EKgbiYURN0ZRCkYumZPTJTHz19-VcBXKTNs1AOQmYQIFpjAzQqHAJGI5iSdq8TKW0i8gC3xrMT0YJKrf1vM~pzzq8J0itTNclwmgtGvsF0RrIVenN124YEfumHe3xZRiB~Ypp1HXMKszXBFc3a7ba4H81EIUESwiaLjINj1JZf6Fj8z7WZL0HrhjvsMIQA7US~Wz9xBSXd0CFod6WO0sqeC7XDOEYpA__", // Replace with the actual online image link
      projectLink: "https://github.com/ManoharBokka0208/Airline-Reservation-Frontend",
      githubLink: "https://github.com/ManoharBokka0208/Airline-Reservation-Frontend",
    },
    {
      id: 3,
      title: "Online Workshop Management",
      description: "A Java Full Stack solution for scheduling and managing workshops.",
      image: "https://media-hosting.imagekit.io//7195790dedb84768/workshoplogo.png?Expires=1832337713&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YpGwT2huM9uwvsKILsG3Z4mySwym1KH3vbA-xI3kkmos3m2SZ6Y~9iZAgVk8D-xyFasxSMVrNhipTrK9Uoe4jNYH77-lbf5tm0M7LWpZzcgJJfE2xmi6YjY-RO3fMM-W7R08lxhUrVBf32Csobnh9ooYnM4HVpcb4igCVDuKU7VLTMiyv45D2l5z7NyVtBJjB2DHJZGRxUD2QCHuwozha7VRuhIqbVZmz-5TU8szmub8bnzOCQ7xpOyjOClJT7Rwp1PbWzdldzwyUXn~yUX~V1QvSQOTD7fl5QeAQtnHOr0VWPznFNpdXug066Rbti60Iwd~hEK4lxM51vne05A9Qw__", // Replace with the actual online image link
      projectLink: "https://github.com/ManoharBokka0208/WMS_Frontend",
      githubLink: "https://github.com/ManoharBokka0208/WMS_Frontend",
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A web-based Task Management Application designed to help users efficiently create, track, and organize tasks with a clean and responsive interface.",
      image: "https://media-hosting.imagekit.io/a8243dec01d84cc9/bc28003b-ea5d-422f-aa63-2b9f760944fd.png?Expires=1838614472&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lgWREPoICnRvND0u1b4dQqtcmVaOsw7nfpOY3AY~gy6gwK1LGp-cPpPjmsZObzOHczaSswwpCbN0YhuQXRUhitQKDF~ooEdmltSja8HLoTc~C32AHdKy0C92gd7fok1wxiH77r5T1vqkfR8gcNkuCkMdbCI8QuwRqAVn8qdVDIPjfttH3eegiq0Pc9NPvqiRJpfEgyCYv-TLCw~tH9y-Kvw0j2v-epBgsQEFX0eHdzwUH~wplXw97vZCgZc8dnO5XdWhdVD-rMHvHcHFEpXCFH-7~7YiG~qhPP-v~WaMkjQA~-7EN-1myP6x57h5Koz3hV96BrCj0zKDCcffYyUDGw__", // Replace with the actual online image link
      projectLink: "https://github.com/ManoharBokka0208/Task-Management-Application",
      githubLink: "https://github.com/ManoharBokka0208/Task-Management-Application",
    },
  ].map((project) => (
    <div
      key={project.id}
      className="bg-gray-800/50 backdrop-blur-md rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300 shadow-lg"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover" // Adjusted image size
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <a
            href={project.projectLink}
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
          >
            View Project <ExternalLink size={16} />
          </a>
          <a href={project.githubLink} className="text-gray-400 hover:text-white">
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

        
</Section>





{/* Skills Section */}
<Section id="skills" title="Skills">
  <div className="flex justify-center">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {[
        { icon: FileCode, name: 'Java', color: 'text-red-400' },
        { icon: Terminal, name: 'Python', color: 'text-yellow-400' },
        { icon: FileJson, name: 'JavaScript', color: 'text-yellow-300' },
        { icon: Globe, name: 'Django', color: 'text-green-500' },
        { icon: Atom, name: 'React.js', color: 'text-blue-400' },
        { icon: FileType2, name: 'HTML', color: 'text-orange-500' },
        { icon: Palette, name: 'CSS', color: 'text-blue-500' },
        { icon: Database, name: 'MySQL', color: 'text-blue-300' },
        { icon: CircleDot, name: 'MongoDB', color: 'text-green-400' },
        { icon: GitBranch, name: 'Git', color: 'text-orange-400' },
      ].map((skill) => (
        <div
          key={skill.name}
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-gray-700/50 transition-all duration-300 group"
        >
          <skill.icon
            className={`w-16 h-16 mx-auto mb-4 ${skill.color} group-hover:scale-110 transition-all duration-300`}
          />
          <h3 className="text-lg font-semibold">{skill.name}</h3>
        </div>
      ))}
    </div>
  </div>
</Section>

{/* Certifications Section */}
<Section id="certifications" title="Certifications">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
    {/* Certification Card */}
    {[
      {
        title: 'Red Hat Certified Enterprise Application Developer',
        issueDate: 'September 23, 2024',
        expiryDate: 'September 23, 2027',
        link: 'https://www.credly.com/badges/95278ee0-3f78-4b37-9a61-7c32159df085/public_url',
      },
      {
        title: 'Automation Anywhere Certified Essentials RPA Professional',
        issueDate: 'September 27, 2024',
        expiryDate: null,
        link: 'https://certificates.automationanywhere.com/97230e91-e016-4339-9852-56b88ba71851',
      },
      {
        title: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
        issueDate: 'July 31, 2024',
        expiryDate: null,
        link: 'https://drive.google.com/file/d/1zVPCF2gE4O-pVtZCjTa-q_mQqmODFDNP/view',
      },
      {
        title: 'AWS Certified Cloud Practitioner',
        issueDate: 'May 17, 2024',
        expiryDate: null,
        link: 'https://www.credly.com/badges/3f7af239-6914-4ada-9c4a-57d1324ee45c/public_url',
      },
    ].map((cert, index) => (
      <div
        key={index}
        className="relative bg-gray-800/50 backdrop-blur-md p-6 rounded-lg min-h-[200px] w-full mx-auto transition-transform transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeIn animate__delay-0.5s"
      >
        <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 mb-4">{cert.title}</h3>
        <p className="text-gray-300">Issued Date: {cert.issueDate}</p>
        {cert.expiryDate && <p className="text-gray-300">Expired Date: {cert.expiryDate}</p>}
        <div className="absolute bottom-4 right-4">
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-yellow-400 hover:underline"
          >
            Certification link
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h5m0 0v5m0-5L10 17m0 0H5m5 0v5"
              />
            </svg>
          </a>
        </div>
      </div>
    ))}
  </div>

  <Footer />
</Section>
    </div>
  );
}

export default App;
