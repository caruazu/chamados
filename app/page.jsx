import ChamadoCard from "./(components)/ChamadoCard"

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
        <ChamadoCard/>
        <ChamadoCard/>
        <ChamadoCard/>
        <ChamadoCard/>
        <ChamadoCard/>
        <ChamadoCard/>
      </div>
    </div>
  )
}

export default Dashboard
