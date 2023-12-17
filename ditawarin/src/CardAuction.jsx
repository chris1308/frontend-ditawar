import plus from "./assets/plus.png"
import location from "./assets/loc.png"
import { useNavigate } from "react-router-dom"

function CardAuction (props) {

    const navigate = useNavigate();


    const moveToAuction = () => {
        navigate('/listing/'+props._id);
    }

    console.log(props)
    let Rupiah = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    });
    console.log(props)
    let url =import.meta.env.VITE_API_URL+'/static/'+props.item.images || "";
    return (
        <>
            <div className="img">
                <img src={url} alt="" className="card-img-top mt-4" style={{width: "25%", maxHeight:"300px", zIndex: -1, position: "absolute"}}/>
            </div>
            <div className="card text-center fontcustom" style={{borderColor: "gray", marginTop: "12rem", width: "68%", marginLeft: "45px"}} onClick={()=>{moveToAuction()}}>
                <div className="card-body">
                    <p className="card-title text-center"><h4><b>{props.item.nama}</b></h4></p>
                    <p className="card-text text-center"><b>{Rupiah.format(props.starting_price)}</b></p>
                    <div className="d-flex">
                        <p className="footer text-center text-body-secondary">
                            0 peserta bid   
                        </p>
                        <p className="text-center text-body-secondary ms-auto">
                            <img src={location} alt="" style={{width: "20px"}} className="me-2"/>{props.kota_kabupaten}
                        </p>
                    </div>
                    <p className="card-title text-center p-2" style={{textTransform: "uppercase", backgroundColor: "#CEF9D3", color: "#0C560B", borderRadius: "5px", width: "fit-content", fontSize: "20px"}}><b>Kategori : </b></p>
                    
                </div>
            </div>
        </>
    )
}

export default CardAuction