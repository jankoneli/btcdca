function updatedca(risk){
    multiplier = 0
    if (50/risk < 1.0){
        multiplier = (50/risk)**3
    }else{
        multiplier = 50/risk*0.65
    }
    dcadaily = 15000*multiplier
    console.log(multiplier)
    document.getElementById("dca").innerText = "Buy Rp. "+parseInt(dcadaily)+" today"
}
setInterval(()=>{
    updatedca(document.getElementById("dcarisk").value)
}, 100)