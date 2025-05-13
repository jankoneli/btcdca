function setSats(sats){
    document.getElementById("satsprog").style.width = (sats.toString()/1000000*100).toString()+"%"
    document.getElementById("sats").innerText = sats.toLocaleString('en') + " sats"
    document.getElementById("sec").innerText = "to 1,000,000 sats ("+(sats.toString()/1000000*100).toFixed(2).toString()+"%"+")"
}

setSats(264800+6687+18699)