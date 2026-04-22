import React from 'react'
import Card from './component/Card'

const App = () => {

    let jobs = [
      {
        brandLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
        companyName: "TechSoft",
        daysAgo: "2 days ago",
        jobPost: "Frontend Developer",
        time: "Full Time",
        position: "Junior Developer",
        salary: "$500/hr"
      },
      {
        brandLogo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        companyName: "CodeHub",
        daysAgo: "5 days ago",
        jobPost: "Backend Developer",
        time: "Full Time",
        position: "Mid-Level Developer",
        salary: "$800/hr"
      },
      {
        brandLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        companyName: "DevNest",
        daysAgo: "1 day ago",
        jobPost: "UI/UX Designer",
        time: "Part Time",
        position: "Designer",
        salary: "$400/hr"
      },
      {
        brandLogo: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
        companyName: "SoftSolutions",
        daysAgo: "3 days ago",
        jobPost: "React Developer",
        time: "Full Time",
        position: "Frontend Engineer",
        salary: "$900/hr"
      },
      {
        brandLogo: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
        companyName: "NextGen Tech",
        daysAgo: "7 days ago",
        jobPost: "Full Stack Developer",
        time: "Full Time",
        position: "Senior Developer",
        salary: "$1200/hr"
      },
      {
        brandLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        companyName: "ByteWorks",
        daysAgo: "4 days ago",
        jobPost: "JavaScript Developer",
        time: "Remote",
        position: "Developer",
        salary: "$700/hr"
      },
      {
        brandLogo: "https://cdn-icons-png.flaticon.com/512/919/919826.png",
        companyName: "WebCore",
        daysAgo: "6 days ago",
        jobPost: "HTML/CSS Developer",
        time: "Part Time",
        position: "Junior Developer",
        salary: "$300/hr"
      },
      {
        brandLogo: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
        companyName: "AppMasters",
        daysAgo: "2 days ago",
        jobPost: "Mobile App Developer",
        time: "Full Time",
        position: "App Developer",
        salary: "$1000/hr"
      }
    ];

  return (
    <div className='parent'>
      {jobs.map(function(elem){
        return <Card  brandLogo={elem.brandLogo} daysAgo={elem.daysAgo} companyName={elem.companyName} jobPost={elem.jobPost} time={elem.time} position={elem.position} salary={elem.salary}/>
      })}
    </div>
  )
}


export default App
