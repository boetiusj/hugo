const job_types = ['exterior', 'cabinets', 'interior', 'commercial', 'wildcard'];
const row_numbers = [...Array(15).keys()];

const ga_sheets_endpoint = "https://sheets.googleapis.com/v4/spreadsheets/1Wo4d7bNVA9CemGYMH4-XaW53SwkE_dkOv13zCrSOcfY/values/Zip%20Filter?&key=AIzaSyA-m6bw9367TTpdjbqO-IHwLveJ6xJpT6M";

let zip_checkup = [];

let user_zip = empty_string;
let job_type = empty_string;

function checkAvailability(row = []) {
  const multiplier = 4;
  const index = job_types.indexOf(job_type.toLowerCase());
  const start = index * multiplier;
  const end = (index + 1) * multiplier;
  const values_range = row_numbers.slice(start, end);
  const zip = values_range[0];
  const city = values_range[1];
  const state = values_range[2];

  zip_checkup = user_zip == row[zip] ? [row[zip], row[city], row[state]] : [];
  return zip_checkup;
}

function toggleBookForm(iframe) {

  fetch(ga_sheets_endpoint)
  .then(response => response.json())
  .then(function(data) {
    data.values.forEach(row => zip_checkup.length ? false : checkAvailability(row));
    if(zip_checkup.length) {
      // double check $zip1
      const query =  `&CITY=${zip_checkup[1]}&STATE=${zip_checkup[2]}&ZIP=${zip_checkup[0]}&TYPE=${job_type}`;
      iframe.src = `${iframe.src}${query}`;
      pushClass(iframe.closest('.booking'), active_class);
    } else {
      window.location.href = iframe.parentNode.dataset.regrets;
    }
  });

}

function sanitizeZip(zip) {
  return zip.length == 9 || zip.length == 10 ?
    zip.replace(hyphen_string, empty_string).substring(0, 5) :
    zip;
}

function checkServiceArea() {
  const forms = elems('form');
  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      const target = event.target;
      if(target.closest('.booking') && (form.id == 'bookform')) {
        event.preventDefault();
        const data = formValues(form);
        user_zip = data.zip.trim(empty_string);
        user_zip = sanitizeZip(user_zip);
        job_type = data.jobtype.trim(empty_string);

        toggleBookForm(elem('iframe', form.parentNode));
      }
    })
  })
}

checkServiceArea();