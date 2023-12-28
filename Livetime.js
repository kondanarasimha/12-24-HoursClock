
    function clock24() {
      const presentDate = new Date();
      const hours = presentDate.getHours().toString().padStart(2, '0');
      const minutes = presentDate.getMinutes().toString().padStart(2, '0');
      const seconds = presentDate.getSeconds().toString().padStart(2,'0');

        const meridiem = ()=> {
        let amPm = '';
        (hours >=12 && hours <=23)? amPm = 'PM' : amPm = 'AM';
        return amPm;
        }

        const clock12 = () => {
          let hours12 = 0;
          (hours === 12 || hours === 0)? hours12 = 12 : hours12 = hours - 12;
          return hours12.toString().padStart(2,'0');
        }
        
        const time = `${minutes} : ${seconds} ${meridiem()}`;
        function onPage() {
          document.querySelector('.js-time-text').innerHTML = `${hours} : ${time}`;
          document.querySelector('.js-timetext').innerHTML =
          `${clock12()} : ${time}`;
        }
        onPage();
        }

    setInterval(clock24,1000);
  
      
        
    


  











