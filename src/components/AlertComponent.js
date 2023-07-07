import '../css/AlertComponent.css';

function Alert({msg, type}){
    return (
        <>
            <div className={`alert ${type}`}>
                {msg}
            </div>
        </>
        )
}
export default Alert;