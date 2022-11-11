/* Your Code Here */
function createEmployeeRecord(array) {
    let employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}

function createEmployeeRecords (arrayofArr) {
    let newArr = arrayofArr.map(createEmployeeRecord)
    return newArr
    
}

function createTimeInEvent(dateStamp) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: Number(dateStamp.substring(11)),
        date: dateStamp.substring(0,10)
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: Number(dateStamp.substring(11)),
        date: dateStamp.substring(0,10)
    })
    return this
}

function hoursWorkedOnDate (dateString) {
    let timeInHour = this.timeInEvents.find((timeInEvent) => {
        if (timeInEvent.date === dateString) {
            return timeInEvent.hour
        }
    })
    let timeOutHour = this.timeOutEvents.find((timeOutEvent) => {
        if (timeOutEvent.date === dateString) {
            return timeOutEvent.hour
        }
    })

    return ((timeOutHour.hour - timeInHour.hour)/ 100)
}

function wagesEarnedOnDate (date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    return (hoursWorked * this.payPerHour)
}

function calculatePayroll(records){
    return records.reduce(function(memo, record) {
        return memo + allWagesFor.call(record)
    }, 0)
}

function findEmployeeByFirstName (records, name){
    return records.find(record => record.firstName === name)
 }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

