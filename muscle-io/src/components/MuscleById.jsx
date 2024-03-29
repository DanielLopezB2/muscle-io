import { useParams } from "react-router-dom";


function MuscleById() {
    const { id } = useParams();
    
    return (
        <div>MuscleById</div>
    )
}

export default MuscleById