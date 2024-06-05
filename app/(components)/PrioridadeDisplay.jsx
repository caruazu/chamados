import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const PrioridadeDisplay = ({prioridade}) => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faFire}
        className={` pr-1 ${prioridade > 0 ? " text-red-400" : " text-slate-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={` pr-1 ${prioridade > 1 ? " text-red-400" : " text-slate-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={` pr-1 ${prioridade > 2 ? " text-red-400" : " text-slate-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={` pr-1 ${prioridade > 3 ? " text-red-400" : " text-slate-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={` pr-1 ${prioridade > 4 ? " text-red-400" : " text-slate-400"}`}
      />
    </div>
  )
}

export default PrioridadeDisplay
