// Create our number formatter.
const formatter = new Intl.NumberFormat("en-US");

function changeCount(count) {
  return function () {
    var counter = parseInt(document.getElementById("inputCount").value);
    var price = parseInt(
      document.getElementById("price").innerHTML.replace(/,/g, ""),
      10
    );
    var countPeople = parseInt(
      document.getElementById("countPeople").innerHTML
    );
    var countPeopleWithPrice = parseInt(
      document
        .getElementById("countPeopleWithPrice")
        .innerHTML.replace(/,/g, ""),
      10
    );
    var countDiscount = parseInt(
      document.getElementById("countDiscount").innerHTML.replace(/,/g, ""),
      10
    );
    var countFee = parseInt(
      document.getElementById("countFee").innerHTML.replace(/,/g, ""),
      10
    );

    var countInput = counter + count;
    var people = countPeople + count;

    if (people <= 1) {
      document.getElementById("countMinus").classList.add("disabled");
    } else {
      document.getElementById("countMinus").classList.remove("disabled");
    }

    if (count == -1) {
      countPrice = countPeopleWithPrice - price;
    } else {
      countPrice = price * countInput;
    }

    var discount = countPrice - countDiscount;
    var countTotal = discount + countFee;

    document.getElementById("inputCount").value = countInput;
    document.getElementById("countPeople").innerHTML = people;
    document.getElementById("countPeopleWithPrice").innerHTML =
      formatter.format(countPrice);
    document.getElementById("total").innerHTML = formatter.format(countTotal);
  };
}

document.getElementById("countMinus").onclick = changeCount(-1);
document.getElementById("countPlus").onclick = changeCount(1);
