function checkAndOrPatternAgainstTaskNameArray(taskNameArray, pattern){
    for (const property in pattern){
        if (property == "And"){
            if (handleAnd(pattern["And"], taskNameArray) == false){
                return false;
            };
        }
        else if (property == "Or"){
            if (handleOr(pattern["Or"], taskNameArray) == false){
                return false;
            };
        }
        else{
            //unexpected. Dealing with an object but didn't contain "And" or "Or"
        }
    }
    return true;
}

function handleAnd(AndArray, taskNameArray){
    for (const conditionItem in AndArray){
        if (typeof AndArray[conditionItem] == "string"){ //this item of the AndArray is a direct string to check
            var valueToCheckInTheTaskName = AndArray[conditionItem];
            if (!taskNameArray.includes(valueToCheckInTheTaskName)){
                return false;
            }
        }
        else{ //this item of the AndArray is an object with more Or/Ands to check
            if (checkAndOrPatternAgainstTaskNameArray(taskNameArray, AndArray[conditionItem]) == false){
                return false;
            }
        }
    }
    return true; //didn't return false on any of the "And" checks. return true.
}

function handleOr(OrArray, taskNameArray){
    for (const conditionItem in OrArray){ //on the assumption an "Or" is always an array.
        if (typeof OrArray[conditionItem] == "string"){
            var valueToCheckInTheTaskName = OrArray[conditionItem];
            if (taskNameArray.includes(valueToCheckInTheTaskName)){
                return true;
            }
        }
        else{
            if (checkAndOrPatternAgainstTaskNameArray(taskNameArray, OrArray[conditionItem]) == true){
                return true;
            }
        }
    }
    return false; //didn't return true on any of the "Or" checks. return false.
}

module.exports = checkAndOrPatternAgainstTaskNameArray;