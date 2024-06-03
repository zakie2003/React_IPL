import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { RotatingLines } from "react-loader-spinner";

export function IplInput() {
    const [showbutton, setbutton] = useState(true);
    const [prediction, setprediction] = useState(0);
    const [input, setinput] = useState([true, false, false, false, false, false]);
    const [loading, setloading] = useState(false);
    const [result,setresult]=useState(false);
    const [data, setdata] = useState({
        "venue": "",
        "inning": "",
        "bat": "",
        "bowl": "",
        "numbboler": "",
        "wic": ""
    })

    function Loader() {
        return (
            <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        )
    }
    function handleSubmit() {
        setresult(true);
        fetch("https://vercel-api-pcka.onrender.com",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-type": "application/json;; charset=UTF-8" },
            }
        )
            .then((res) => { return (res.json()) })
            .then((result) => 
            {

                setloading(true);
                setprediction(Math.floor(result["prediction"]));
            })
            .catch((err) => { console.log(err) })
    }


    function handleClick() {
        let arr = [...input];
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i]) {
                arr[i] = false;
                arr[i + 1] = true;
                setinput(arr);
                break;
            }
        }
    }

    function handleChange(e, atr) {
        if (atr === "wic") {
            setbutton(false);
        }
        let obj = data;
        obj[atr] = (e.target.value);
        setdata({ ...obj });
    }
    console.log(data)
    return (
        <>
            {
                    <Container>
                        <center>
                            <h1 style={{padding:"4rem",color: "white",fontSize:"40px"}}>IPL Power Play Predictor App</h1>
                        </center>
                        <center >
                            {
                                input[0] ?
                                    <select onChange={(e) => handleChange(e, "venue")} required style={{ transition: "2s ease-in-out", opacity: (input[0] ? 1 : 0), padding: "5px", width: "40%", fontSize: "1.5rem", borderRadius: "10px", color: "white", backgroundColor: "#383838" }} aria-label="Select Venue">
                                        <option value="">Venue</option>
                                        <option value="MA Chidambaram Stadium, Chepauk, Chennai">MA Chidambaram Stadium, Chepauk, Chennai</option>
                                        <option value="Arun Jaitley Stadium, Delhi">Arun Jaitley Stadium, Delhi</option>
                                        <option value="M Chinnaswamy Stadium">M Chinnaswamy Stadium</option>
                                        <option value="Narendra Modi Stadium, Ahmedabad">Narendra Modi Stadium, Ahmedabad</option>
                                        <option value="Wankhede Stadium, Mumbai">DWankhede Stadium, Mumbai</option>
                                        <option value="Dr DY Patil Sports Academy, Mumbai">Dr DY Patil Sports Academy, Mumbai</option>
                                        <option value="Punjab Cricket Association IS Bindra Stadium">Punjab Cricket Association IS Bindra Stadium</option>
                                        <option value="Sawai Mansingh Stadium">Sawai Mansingh Stadium,Jaipur</option>
                                        <option value="Rajiv Gandhi International Stadium, Uppal">Rajiv Gandhi International Stadium, Uppal</option>
                                    </select>
                                    : null

                            }

                            {
                                input[1] ?
                                    <select onChange={(e) => handleChange(e, "inning")} required style={{ transition: "2s ease-in-out", opacity: (input[1] ? 1 : 0), padding: "5px", width: "40%", fontSize: "1.5rem", borderRadius: "10px", color: "white", backgroundColor: "#383838" }} aria-label="Select Innings">
                                        <option value="">Select Inning</option>
                                        <option value="1">1st Inning</option>
                                        <option value="2">2nd Inning</option>
                                    </select>
                                    : null
                            }
                            {
                                input[2] ?
                                    <select onChange={(e) => handleChange(e, "bat")} required style={{ transition: "2s ease-in-out", opacity: (input[2] ? 1 : 0), padding: "5px", width: "40%", fontSize: "1.5rem", borderRadius: "10px", color: "white", backgroundColor: "#383838" }} aria-label="Select Team 1">
                                        <option value="">Select team 1</option>
                                        <option value="Mumbai Indian">Mumbai Indian</option>
                                        <option value="Gujarat Titans">Gujarat Titans</option>
                                        <option value="Rajasthan Royals">Rajasthan Royals</option>
                                        <option value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
                                        <option value="Delhi Capitals">Delhi Capitals</option>
                                        <option value="Chennai Super Kings">Chennai Super Kings</option>
                                        <option value="Punjab Kings">Punjab Kings</option>
                                        <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
                                    </select>
                                    : null
                            }

                            {
                                input[3] ?
                                    <select onChange={(e) => handleChange(e, "bowl")} style={{ transition: "2s ease-in-out", opacity: (input[3] ? 1 : 0), padding: "5px", width: "40%", fontSize: "1.5rem", borderRadius: "10px", color: "white", backgroundColor: "#383838" }} aria-label="Select Team 2">
                                        <option value="">Select team 2</option>
                                        <option value="Mumbai Indian">Mumbai Indian</option>
                                        <option value="Gujarat Titans">Gujarat Titans</option>
                                        <option value="Rajasthan Royals">Rajasthan Royals</option>
                                        <option value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
                                        <option value="Delhi Capitals">Delhi Capitals</option>
                                        <option value="Chennai Super Kings">Chennai Super Kings</option>
                                        <option value="Punjab Kings">Punjab Kings</option>
                                        <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
                                    </select>
                                    : null
                            }
                            {
                                input[4] ?
                                    <input onChange={(e) => handleChange(e, "numbboler")} value={data["numbboler"]} style={{ transition: "2s ease-in-out", opacity: (input[4] ? 1 : 0), padding: "5px", width: "40%", fontSize: "1.5rem", borderRadius: "10px", color: "white", backgroundColor: "#383838" }} required type="number" name="numbboler" id="exampleFormControlInput1" placeholder="No. Of Bowler" />
                                    : null
                            }
                            {
                                input[5] ?
                                    <input onChange={(e) => handleChange(e, "wic")} value={data["wic"]} style={{ transition: "2s ease-in-out", opacity: (input[5] ? 1 : 0), padding: "5px", width: "40%", fontSize: "1.5rem", borderRadius: "10px", color: "white", backgroundColor: "#383838" }} required type="number" name="wic" id="exampleFormControlInput1" placeholder="No. Of Wickets" />
                                    : null
                            }
                            <br />
                            <br />
                            <br />
                            {
                                showbutton ?
                                    loading?
                                        <button style={{paddingTop: "5px", paddingBottom: "5px", paddingRight: "10px", paddingLeft: "10px", borderRadius: "5px", fontSize: "20px", backgroundColor: "rgb(63 63 64)", color: "white" }} type="primary"><Loader/></button>
                                    :
                                    <button onClick={handleClick} style={{paddingTop: "5px", paddingBottom: "5px", paddingRight: "10px", paddingLeft: "10px", borderRadius: "5px", fontSize: "20px", backgroundColor: "rgb(63 63 64)", color: "white" }} type="primary">Next</button>
                                    : <button onClick={handleSubmit} style={{ paddingTop: "5px", paddingBottom: "5px", paddingRight: "10px", paddingLeft: "10px", borderRadius: "5px", fontSize: "20px", backgroundColor: "rgb(63 63 64)", color: "white" }} type="primary">Submit</button>
                            }
                        </center>
                        {
                            result?
                            loading?
                                <center>
                                    <h1 style={{color:"white"}}>The Power Play Prediction is {prediction}</h1>
                                </center>
                                :
                                <center>
                                    <Loader/>
                                </center>
                            :null
                        }
                    </Container>
            }

        </>
    )
}