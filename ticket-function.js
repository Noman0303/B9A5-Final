function getConvertedValue(id){
    const selectedItemString = document.getElementById(id).innerText;
    const selectedItemValue = parseInt(selectedItemString)
    return selectedItemValue
    
}


// const available = getConvertedValue("available")
// const selected = getConvertedValue("selected")


const allbtn=document.getElementsByClassName("btn-selected")
console.log(allbtn);

for (const btn of allbtn) {
    btn.addEventListener("click",function(event){
        const button = event.target.innerText;
        console.log(button);
        const className = "Economy";
        const price = 500;

        console.log ( button, className, price);

        const selectedContainer = document.getElementById("selected-ticket-container");

        const div = document.createElement("div");
        div.classList.add("flex","justify-around","p-2");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = button;
        p2.innerText = className;
        p3.innerText = price;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedContainer.appendChild(div);

        updateTotalCost(price);
        grandTotalValue();
    })
}

function updateTotalCost(price){
    // console.log(price);
    const totalCost= getConvertedValue("Ticket-sum")
    const sum = totalCost + price
    document.getElementById("Ticket-sum").innerText = sum;
    grandTotalValue();

}


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

  function grandTotalValue() {
    const totalCost = getConvertedValue("Ticket-sum");
    const couponCode = document.getElementById("couponInput").value;
    let discountAmount = 0;
    
    if (couponCode === "NEW15") {
        discountAmount = totalCost * 0.15;
    } else if (couponCode === "Couple 20") {
        discountAmount = totalCost * 0.20;
    }

    const grandTotal = totalCost - discountAmount;
    document.getElementById("grand-total").innerText = grandTotal.toFixed(2);
}