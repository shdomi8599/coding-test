function solution(date1, date2) {
    const [year1,month1,day1] = date1
    const [year2,month2,day2] = date2
    const customDate1 = new Date(`${year1}-${month1}-${day1}`)
    const customDate2 = new Date(`${year2}-${month2}-${day2}`)
    if(customDate1.getTime()-customDate2.getTime()>=0){
        return 0
    }
    return 1
}