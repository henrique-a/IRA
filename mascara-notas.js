var onNotaInput = function (event) {
    var regexp = new RegExp("[^0-9]", "g");
    var value = event.target.value.replace(regexp, "");
    value = parseInt(value) / 10;
    if (value >= event.target.min && value <= event.target.max) {
      event.target.dataset.value = value;
    } else {
      value = parseFloat(event.target.dataset.value);
    }
    if (isNaN(value)) {
      value = 0;
    }
    event.target.value = value.toLocaleString(undefined, { minimumFractionDigits: 1 }).replace(",", ".");    
  };



  