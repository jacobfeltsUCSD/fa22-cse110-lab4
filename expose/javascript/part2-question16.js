let statistics = {
    redCards: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (let i in statistics) {
    if(i.slice(0,1) == "r" || statistics[i] % 2 == 1) {
        console.log(statistics[i])
    }
}