function getConvertedValue(id){
    const selectedItemString = document.getElementById(id).innerText;
    const selectedItemValue = parseInt(selectedItemString)
    return selectedItemValue
}

const allbtn=document.getElementsByClassName(btn-selected)

for (const btn of allbtn) {
    btn.addEventListener("click",function(event){
        console.log(event)
    })
}

const seatnumber = document.getElementById(seat-number).innertext
const class = document.getElementById(Economy).innertext;
const seatValue = document.getElementById(value).innertext;


// coupon apply

function applyCoupon() {
    const couponCode = document.getElementById("couponInput").value;
    if (couponCode === "NEW15") {
        apply15()
    }
    else if (couponCode === "Couple 20") {
        apply20()
    }

    else {
      alert("Invalid coupon code. Please try again.");
    }
  }

  function apply15() {
    const discountedvaluetext1=document.getElementById("Ticket-sum").innerText;
        const discountedvalue=parseFloat(discountedvaluetext1);
        const discountamount=discountedvalue*0.15;
        document.getElementById("Ticket-discount").innerText = discountamount.toFixed(2);
  }

  function apply20() {
    const discountedvaluetext1=document.getElementById("Ticket-sum").innerText;
        const discountedvalue=parseFloat(discountedvaluetext1);
        const discountamount=discountedvalue*0.20;
        document.getElementById("Ticket-discount").innerText = discountamount.toFixed(2);
  }