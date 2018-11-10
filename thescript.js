$(function () {
  $("#attendees_wrapper select").each(function () {
    $(this).change(function () {
      calculateSum();
    });
  });
});

let sum = 0

document.querySelectorAll('[id^="widget_"], #shipping_price').forEach(tag =>
  sum += parseFloat(tag.textContent.slice(1))
)

document.querySelector('#total_price').textContent = `$${Math.round(sum * 100) / 100}`