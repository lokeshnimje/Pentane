import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Paper} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    grid: {
        width: '100%',
        margin: "0px",
        borderRadius: "none",
    },
    paper: {
        padding: theme.spacing(2),
        testAlign: 'center',
        color: theme.palette.text.secondary, 
        borderRadius: "0px",
        boxShadow:"none"

    }
}));
const Section_popular = ({data}) => {
    const  classes = useStyles();
    if (data.length>0) {
        console.log(data);
        const data1 = data[0]
        const data2 = data[1]
        const data3 = data[2]
        const data4 = data[3]

    


        const published_date1 = data1.published_date
        const published_date2 = data2.published_date
        const published_date3 = data3.published_date
        const published_date4 = data4.published_date

        let date1 = published_date1.trim().split("-")
        let day1= date1[2].split("T")


        let date2 = published_date2.trim().split("-")
        let day2= date2[2].split("T")

        let date3 = published_date3.trim().split("-")
        let day3= date3[2].split("T")

        let date4 = published_date4.trim().split("-")
        let day4= date4[2].split("T")

        const Month = (month)=>{
            switch (month) {
                case "01": {
                    return "January"
                }
                case "02": {
                    return "February"
                }
                case "03": {
                    return "March"
                }
                case "04": {
                    return "April"
                }
                case "05": {
                    return "May"
                }
                case "06": {
                    return "June"
                }
                case "07": {
                    return "July"
                }
                case "08": {
                    return "August"
                }
                case "09": {
                    return "September"
                }
                case "10": {
                    return "October"
                }   
                case "11": {
                    return "November"
                }
                case "12": {
                    return "December"
                }
                    

            
                default:
                    break;
            }
        }
        
    
        return (
            <Grid container spacing = {1} className = {classes.grid}>

                <Grid item xs ={12} md = {7}>
                    <Paper className = {classes.paper}>
                        <div style = {{display:"flex", borderBottom: "1px black solid",paddingBottom:"15px"}}>
                            <div>
                                <div style = {{textAlign:"left", fontWeight:"500", color:"black", fontSize:"20px", marginBottom:"5px"}}>{data1.title}</div>
                                <div style = {{textAlign:"left", color:"black", fontSize:"16px", fontWeight:"400"}} >{data1.abstract}</div>
                                <div style = {{fontSize:"14px", marginTop:"10px", textAlign:"left", color:"#99999"}}> {data1.byline}</div>
                                <div style = {{fontSize:"14px", marginTop:"10px", textAlign:"left", color:"#99999"}}>{ Month(date1[1])} {day1[0]}, {date1[0]}</div>
                            </div>
                            <div>
                                <img style = {{width:"350px", height:"280px"}} src={data1.multimedia[4].url} alt="small"/>
                            </div>
                        </div>
                    </Paper>
                </Grid> 

            <Grid item  xs ={12} md = {5}>
                    <Paper className = {classes.paper}>
                        <div style = {{display:"flex", flexDirection:"column", borderBottom: "1px black solid", paddingBottom:"15px"}}>
                            <div style = {{textAlign:"center", fontWeight:"500", color:"black", fontSize:"20px", marginBottom:"5px"}}>{data2.title}</div>
                            <div style = {{display:"flex"}}>
                                <div  style = {{textAlign:"left", color:"black", fontSize:"16px", fontWeight:"400" , marginRight:"5px"}}>{data2.abstract}</div>
                                <div> <img style = {{width:"180px", height:"190px"}} src={data2.multimedia[3].url} alt="small"/> </div>
                            </div>
                            <div style = {{display:"flex", fontSize:"14px", marginTop:"10px", textAlign:"left", color:"#99999" }}><span style = {{marginRight:"5px"}}>{ Month(date2[1])} {day2[0]}, {date2[0]} </span> <span>  {data2.byline}  </span>  </div>
                        </div>
                    </Paper>
                </Grid>

                <Grid item  xs ={12} md = {7}>
                <Paper className = {classes.paper}>
                        <div style = {{display:"flex"}}>
                            <div>
                                <div  style = {{textAlign:"left", fontWeight:"500", color:"black", fontSize:"20px", marginBottom:"5px"}}>{data3.title}</div>
                                <div style = {{textAlign:"left", color:"black", fontSize:"16px", fontWeight:"400"}} >{data3.abstract}</div>
                                <div style = {{fontSize:"14px", marginTop:"10px", textAlign:"left", color:"#99999"}}> {data3.byline}</div>
                                <div style = {{fontSize:"14px", marginTop:"10px", textAlign:"left", color:"#99999"}}>{ Month(date3[1])} {day3[0]}, {date3[0]}</div>
                            </div>
                            <div>
                                <img style = {{width:"350px", height:"200px"}} src={data3.multimedia[4].url} alt="small"/>
                            </div>
                        </div>
                    </Paper>
                </Grid>

                <Grid item  xs ={12} md = {5}>
                    <Paper className = {classes.paper}>
                    <div style = {{display:"flex", flexDirection:"column"}}>
                            <div style = {{textAlign:"center", fontWeight:"500", color:"black", fontSize:"20px", marginBottom:"5px"}}>{data4.title}</div>
                            <div style = {{display:"flex"}}>
                                <div  style = {{textAlign:"left", color:"black", fontSize:"16px", fontWeight:"400" , marginRight:"5px"}}>{data4.abstract}</div>
                                <div> <img src={data4.multimedia[4].url} alt="small"/> </div>
                            </div>
                            <div style = {{display:"flex", fontSize:"14px", marginTop:"10px", textAlign:"left", color:"#99999" }}><span style = {{marginRight:"5px"}}>{ Month(date4[1])} {day4[0]}, {date4[0]} </span> <span>  {data4.byline}  </span>  </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        )
    } else {
        return (
            <div> ... loading</div>
        )
    }
}

export default Section_popular
