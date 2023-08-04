$(document).ready(function () {
  $.getJSON('../resource/meal.json', function (data) {
    let meal_data = '';
    $.each(data, function (key, value) {
      // console.log(key);
      meal_data += '<tr>';
      meal_data += '<td>' + value.dates + '</td>';
      meal_data += '<td>아침</td>';
      meal_data += '<td>' + value.brst + '</td>';
      meal_data += '<td>' + value.brst_cal + '</td>';
      meal_data += '</tr>';
      meal_data += '<tr>';
      meal_data += '<td></td>';
      meal_data += '<td>점심</td>';
      meal_data += '<td>' + value.lunc + '</td>';
      meal_data += '<td>' + value.lunc_cal + '</td>';
      meal_data += '</tr>';
      meal_data += '<tr>';
      meal_data += '<td></td>';
      meal_data += '<td>저녁</td>';
      meal_data += '<td>' + value.dinr + '</td>';
      meal_data += '<td>' + value.dinr_cal + '</td>';
      meal_data += '</tr>';
    });
    $('#table').append(meal_data);
  });
});
