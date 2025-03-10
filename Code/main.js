employeeData = {
    name : "John Doe",
    date : "2000-01-01",
    distance : 20,
    time : 60 // by minute
}

fuelConsume = {
    pertalite : {
        distance : 12,
        liter : 1
    }
}

function fuelConsuming($fuelType, $data){
    return $data.distance / $fuelType.distance * $fuelType.liter
}

console.log(fuelConsuming(fuelConsume.pertalite, employeeData))
