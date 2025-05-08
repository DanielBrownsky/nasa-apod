

function Main(props){
    const { data } = props
    return(
        <div className="image-container">
            <img className="bg-image" src={data.hdurl} alt={data.title || 'bg-img'} />
        </div>
    )

}

export default Main;