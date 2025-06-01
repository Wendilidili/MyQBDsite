
  const paymentRadios = document.querySelectorAll('.payment-option input[type="radio"]');

  paymentRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.payment-option').forEach(option =>
        option.classList.remove('selected')
      );
      radio.closest('.payment-option').classList.add('selected');

      // Save if needed
      localStorage.setItem('paymentMethod', radio.value);
    });
  });



  document.addEventListener("DOMContentLoaded", () => {
  const estimatedTotal = localStorage.getItem('estimatedTotal');
  const shippingCost = localStorage.getItem('shippingCost');
  const subtotal = 44.98; // you can store/retrieve this dynamically too if needed

  if (estimatedTotal && shippingCost) {
    const gst = (parseFloat(estimatedTotal) * 0.1).toFixed(2);

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping-cost').textContent = `$${parseFloat(shippingCost).toFixed(2)}`;
    document.getElementById('estimated-total').textContent = `$${parseFloat(estimatedTotal).toFixed(2)}`;
    document.getElementById('gst').textContent = `$${gst}`;
  }
});