

const Service=()=>{
  const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
];
  return(
   <div className="about" id="service">
      <div className="about-container">
        <h2 className="about-head">My Services</h2>
        <div className="service">
          {services.map(service =>(
            <div key={service.id}className="service-const">
              
              <div className="service-im">
                {service.id}

              </div>
              <h3 className="service-title">
                {service.title}
              </h3>
              <p className="service-desc">{service.description}</p>
            </div>

          ))}


        </div>
        </div>
        </div>
  )
}
export default Service