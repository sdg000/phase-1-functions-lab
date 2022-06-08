function distanceFromHqInBlocks(blockNum){
    if (blockNum > 42){
        return blockNum - 42
    }else if (blockNum < 42){
        return 42 - blockNum
    }
//return blockNum - 42
}

function distanceFromHqInFeet(blockNum){
    let feet = distanceFromHqInBlocks(blockNum)
    return feet * 264
}

function distanceTravelledInFeet(num1, num2){
    if (num1 > num2){
        return (num1 - num2) * 264
    }else if (num1 < num2){
        return (num2 - num1) * 264
    }
    //return (num1 - num2) * 264
}

function calculatesFarePrice(start, destination){
    let fare
    if (start < destination){
        if (((destination - start) * 264) < 400){
            return 0
        }else if (((destination - start) * 264) > 2000){
            return 25
        }
    }else if (start > destination){
        fare = ((start - destination) * 264)
        if (fare > 400 && fare <= 2000){
            return (fare - 400) * 0.02
        }else if(fare > 2500){
            return "cannot travel that far"
        }
    }
}