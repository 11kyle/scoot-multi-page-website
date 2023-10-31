const jobs = [
  {
    id: 0,
    title: "General Manager",
    location: "Jakarta, Indonesia",
  },
  {
    id: 1,
    title: "UI/UX Designer",
    location: "Yokohama, Japan",
  },
  {
    id: 2,
    title: "Blog Content Copywriter",
    location: "New York, United States",
  },
  {
    id: 3,
    title: "Graphic Designer",
    location: "New York, United States",
  },
  {
    id: 4,
    title: "Fleet Supervisor",
    location: "Jakarta, Indonesia",
  },
  {
    id: 5,
    title: "UX Analyst",
    location: "London, United Kingdom",
  },
]

export default function Job() {
  return (
    <div className="w-full space-y-4 lg:space-y-6">
      {jobs.map(job => (
        <div key={job.id} className="flex flex-col md:flex-row items-center md:justify-between gap-4 w-full bg-snow p-8 pt-9">
          <div className="flex flex-col gap-y-1 md:gap-y-2 text-center md:text-left">
            <h5 className="text-dark-navy font-heading text-[18px] font-bold leading-[24px] -tracking-[0.804px]">{job.title}</h5>
            <p className="text-dark-navy font-body">{job.location}</p>
          </div>
          <button className="w-[180px] h-[53px] bg-yellow text-white body !font-heading !font-bold">Apply</button>
        </div>
      ))}
    </div>
    
  )
}
