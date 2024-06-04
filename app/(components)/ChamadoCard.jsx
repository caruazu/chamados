import DeleteBlock from './DeleteBlock'
import PrioridadeDisplay from './PrioridadeDisplay'
import ProgressoDisplay from './ProgressoDisplay'
import StatusDisplay from './StatusDisplay'

const ChamadoCard = () => {
  return (
    <div 
        className="
            flex
            flex-col
            hover:bg-card-hover-card
            rounded-md
            shadow-lg
            p-3
            m-2
        ">

        <div className="flex mb-3" >
            <PrioridadeDisplay/>
            <div className="ml-auto">
                <DeleteBlock/>
            </div>
        </div>

        <h4 className="mb-1">Título do chamado</h4>
        <hr className="h-px  border-0 bg-page mb-2 "></hr>
        <p className="whitespace-pre-wrap">descrição bla bla</p>



        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs  my-1">10/01/2020</p>
            <ProgressoDisplay/>
          </div>
          <div className="ml-auto  flex items-end">
            <StatusDisplay/>
          </div>
        </div>
    </div>
  )
}

export default ChamadoCard
