import { click } from "@testing-library/user-event/dist/click"
import { useEffect } from "react"



export default function Navigation(props) {

    function nextPage(e) {
        if(props.totalpage > props.currentpage)
            props.setCurrentPage((p) => p += 1)
       
    }
    function prevPage(e) {
        if(props.currentpage > 1)
            props.setCurrentPage((p) => p -= 1)
       
    }
    
   



    return (
      <>
        <div className="navigation">
          <button className="prev" id="prev" onClick={prevPage} disabled={props.currentpage === 1}>
            Prev
          </button>
          <h4>{`${props.currentpage} / ${props.totalpage}`}</h4>
          <button className="next" id="next" onClick={nextPage} disabled={props.currentpage === props.totalpage || props.totalpage === 0}>
            next
          </button>
        </div>
      </>
    );
}