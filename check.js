function checkInfor()
{
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const email = document.getElementById('email').value;
    const result = document.getElementById('resultInfo'); 

    if(age <= 0 || isNaN(age))
    {
        result.textContent = 'Tuổi không hợp lệ!';
        return ;
    }

    if(!email.includes("@")) 
    {
        result.textContent = 'Địa chỉ Email không hợp lệ!';
        return ;
    }
    result.textContent = 'Chào mừng ' + name + '!';

}

function CalculateCircle()
{
    const r = parseFloat(document.getElementById('r').value);
    const result = document.getElementById('resultCircle'); 
    if(r <= 0 || typeof r !== 'number')
    {
        result.textContent = 'Bán kính không hợp lệ';
        return ;
    }
   // C = 2 * π * r và diện tích A = π * r².
    
     const chuvi = 2 * Math.PI * r;
    const dientich = Math.PI * r * r;
    result.textContent = 'Chu vi là: ' + chuvi.toFixed(2) + '  Diện tích là: ' + dientich.toFixed(2);

}


function CheckNumber()
{
    const so = parseInt(document.getElementById('NumberToCheck').value);
    const result = document.getElementById('resultNumber'); 
  
   
   
    if (isNaN(so) || so <= 0) {
        result.textContent = 'Số không hợp lệ';
        return;
    }
   
   
    if (so % 2 === 0) {
        result.textContent = 'Số ' + so + ' là số chẵn';
    } else {
        result.textContent = 'Số ' + so + ' là số lẻ';
    }
}

//Năm nhuận là năm chia hết cho 4, 
//nhưng nếu là năm  không chia hết cho 100 thì phải chia hết cho 400 mới được tính là năm nhuận./


function CheckLeapYear()
{
    const year = parseInt(document.getElementById('Year').value);
    const result = document.getElementById('resultYear'); 
  
   
   
    if (isNaN(year) || year <= 0) {
        result.textContent = 'Năm không hợp lệ';
        return;
    }
     
     if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) 
    {
         result.textContent =  + year + ' là năm nhuận';
    }
    else {
          result.textContent =  + year + ' không phải  là năm nhuận';
    }

}



function Calculate()
{
    const num1 = parseInt(document.getElementById('number1').value);
    const num2 = parseInt(document.getElementById('number2').value);

    const choose = document.getElementById('chooseCal').value;
    const result = document.getElementById('resultCalculate'); 
   
   
    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = 'Vui lòng nhập số hợp lệ!';
        return;
    }
    let resultValue ;
     
    switch(choose)
    {
        case 'add' : 
        
            resultValue =num1 + num2;
            break;
          case 'sub' : 
        
            resultValue = num1 - num2;
            break;
              case 'mul' : 
        
            resultValue = num1 * num2;
            break;

            case 'divi' : 
            if (num2 === 0) {
                result.textContent = 'Không thể chia cho 0';
                return;
            }
            resultValue = num1 / num2;
            break;
    }
      result.textContent =  'Kết quả: ' + resultValue;
}




function PrintEvenNumber()
{
   
    const result = document.getElementById('resultPrintNumber'); 
    let evenNumbers = '';

     for(let i = 1; i <= 100; i++)
     {
        if( i % 2 === 0)
        {
              evenNumbers += i + ' ';
        }
     }
     result.textContent = 'Các số chẵn từ 1 đến 100 là: '+  evenNumbers;
   
}





                  

function GuessSecretNumber() {
    const result = document.getElementById('resultSecretNumber'); 
    let numberSecret = 43; // Số bí mật


    let numberInput = parseInt(document.getElementById('numberInput').value);


    if (isNaN(numberInput)) {
        result.textContent = 'Vui lòng nhập một số hợp lệ.';
        return; 
    }

   
        if (numberInput < numberSecret) {
            result.textContent = 'Số của bạn nhỏ hơn số bí mật. Hãy thử lại.';
          
        } else if(numberInput > numberSecret) {
            result.textContent = 'Số của bạn lớn hơn số bí mật. Hãy thử lại.';
           
        }
        else {
            result.textContent = 'Chúc mừng bạn đã tìm được số bí mật';
        }

     

     

    
}


function GuessSecretNumbe()
{
   
    const result = document.getElementById('resultSecretNumber');
    const numberInput = document.getElementById('numberInput').value;

    let  numberSecret = Math.random();
    
     while (numberInput !== numberSecret) {
        if (isNaN(numberInput)) {
            result.textContent = 'Vui lòng nhập một số hợp lệ.';
            return; 
        }

        if (numberInput < numberSecret) {
            result.textContent = 'Số của bạn nhỏ hơn số bí mật.';
        } else if (numberInput > numberSecret) {
            result.textContent = 'Số của bạn lớn hơn số bí mật.';
        }

      
    }
     result.textContent = 'Chúc mừng bạn đã tìm được số bí mật';
}




function SumNumber()
{
    const n = parseInt(document.getElementById('numberToSum').value);
    const result = document.getElementById('resultSum'); 
    
      if (isNaN(n) || n <= 0) 
    {
          result.textContent = 'Vui lòng nhập một số hợp lệ lớn hơn 0!';
          return;
   
    }
    let sum = 0;
     for(let i = 1; i <= n; i++)
     {
        sum += i;
     }
     result.textContent = 'Tổng từ 1 đến '+ n + ' là '  + sum;
   
}