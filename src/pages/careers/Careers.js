import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {
  //by the help of useLoaderData method we can access loader function and grab the data from it  
  const careers = useLoaderData();
  return (
    <div className="careers">
      {careers.map(career => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

//loader function
//This function will load the data from data folder and return a promise
export const careersLoader = async () => {
  const res = await fetch('http://localhost:8000/careers')

  if(!res.ok) {
    throw Error("Could not fetch the data.");
  }
  return res.json()
}
