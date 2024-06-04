import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DeleteBlock = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faX}
        className=" text-red-400 hover:cursor-pointer hover:text-red-200"
      />
    </div>
  )
}

export default DeleteBlock
