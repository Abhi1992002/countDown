
  
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", (e) => {
    //   e.preventDefault();
      const countdown = () =>{
      let inputYear = document.querySelector(".input_year")
      let inputMonth = document.querySelector(".input_month")
      let inputDate = document.querySelector(".input_date")
      let inputHour = document.querySelector(".input_hour")
      let inputMinute = document.querySelector(".input_minute")
      let inputSecond = document.querySelector(".input_second")
  

      const countDate = new Date(`${inputMonth.value} ${inputDate.value}, ${inputYear.value} ${inputHour.value}:${inputMinute.value}:${inputSecond.value}`).getTime();
       console.log(countDate)

    
       


    const now = new Date().getTime();
    // console.log(now)
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60 ;
    const hour = minute * 60 ;
    const day  = hour * 24;

    let textDay = Math.floor(gap / day)
    let textHour = Math.floor( (gap % day)/hour )
    let textMinute = Math.floor((gap % hour) / minute )
    let textSecond = Math.floor((gap%minute)/second)

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
    console.log(countDate) 
}

setInterval(()=>{
    countdown();
},1000)



    });  
  
// gettime convert time into milisecond