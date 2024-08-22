import { useState } from "react";
import "./App.css";

export const App=()=>{
    const [value,setvalue]=useState("");
    const [operator, setOperator]= useState("");
    const [value1,setvalue1]=useState("");

    function addOperator(input){
        if(operator===""){
        setOperator(input);
        setvalue1(value);
        setvalue("")
        }
    }
    
    function equal(){
        if(operator==="+"){
            setvalue(parseFloat(value)+parseFloat(value1));
            setOperator("")
        }
        else if(operator==="-"){
            setvalue(parseFloat(value1)-parseFloat(value));
            setOperator("")
        }
        else if(operator==="*"){
            setvalue(parseFloat(value1)*parseFloat(value));
            setOperator("")
        }
        else if(operator==="/"){
            setvalue(parseFloat(value1)/parseFloat(value));
            setOperator("")
        }
         else if(operator==="%"){
            setvalue(parseFloat(value1)%parseFloat(value));
            setOperator("")
        }
    }

    function toggle(){
        setvalue(-value)
    }

    function changeValue(input){
        setvalue(value+input);
    }

    function resetValue(){
        setvalue("")
    }

    return (
        <>
          <div className="Container">
            <div className="Box">
                {operator}
            </div>
            <div className="Box">
                {value}
            </div>
            <div className="Buttons">
            <button onClick={()=>resetValue()} className="Button">
                C
            </button>
            <button  onClick={()=>toggle()} className="Button">
                +/-
            </button>
            <button onClick={()=>addOperator("%")} className="Button">
                %
            </button>
            <button onClick={()=>addOperator("/")} className="Button" style={{backgroundColor: "orange"}}>
                /
            </button>
            <button onClick={()=>changeValue("7")} className="Button">
                7
            </button>
            <button onClick={()=>changeValue("8")} className="Button">
                8
            </button>
            <button onClick={()=>changeValue("9")} className="Button">
                9
            </button>
            <button onClick={()=>addOperator("*")} className="Button" style={{backgroundColor: "orange"}}>
                *
            </button>
            <button onClick={()=>changeValue("4")} className="Button">
                4
            </button>
            <button onClick={()=>changeValue("5")} className="Button">
                5
            </button>
            <button onClick={()=>changeValue("6")} className="Button">
                6
            </button>
            <button onClick={()=>addOperator("-")} className="Button" style={{backgroundColor: "orange"}}>
                -
            </button>
            <button onClick={()=>changeValue("1")} className="Button">
                1
            </button>
            <button onClick={()=>changeValue("2")} className="Button">
                2
            </button>
            <button onClick={()=>changeValue("3")} className="Button">
                3
            </button>
            <button onClick={()=>addOperator("+")} className="Button" style={{backgroundColor: "orange"}}>
                +
            </button>
            <button onClick={()=>changeValue("0")} className="Button" style={{width: "200px"}}>
                0
            </button>
            <button onClick={()=>changeValue(".")} className="Button">
                .
            </button>
            <button onClick={()=>equal()} className="Button" style={{backgroundColor: "orange"}}>
                =
            </button>
            </div>
          </div>
        </>
    );
}