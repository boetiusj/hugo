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

function pushClass(element, className) {
  if (element && !element.classList.contains(className)) {
    console.log(`Adding class ${className} to element`, element);
    element.classList.add(className);
  } else {
    console.log(
      `Element already has class ${className} or element is null`,
      element
    );
  }
}

function toggleBookForm(iframe) {
  fetch(ga_sheets_endpoint)
    .then((response) => response.json())
    .then(function (data) {
      data.values.forEach((row) =>
        zip_checkup.length ? false : checkAvailability(row)
      );
      if (zip_checkup.length) {
        const query = `&CITY=${zip_checkup[1]}&STATE=${zip_checkup[2]}&ZIP=${zip_checkup[0]}&TYPE=${job_type}`;
        iframe.src = `${iframe.src}${query}`;
        const bookingElement = iframe.closest(".booking");
        console.log("Booking element:", bookingElement);
        pushClass(bookingElement, "active");

        // Hide the breadcrumbs
        const breadcrumbs = document.querySelector(".breadcrumbs");
        if (breadcrumbs) {
          breadcrumbs.style.display = "none";
        }

        // Debugging: Check if the form is hidden
        const bookForm = document.querySelector("#bookform");
        if (bookForm) {
          console.log("Book form element:", bookForm);
          console.log(
            "Book form display style before hiding:",
            bookForm.style.display
          );
          bookForm.style.display = "none";
          console.log(
            "Book form display style after hiding:",
            bookForm.style.display
          );
        } else {
          console.log("Book form element not found");
        }
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

// Ensure checkServiceArea is called to set up event listeners
function checkServiceArea() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      const target = event.target;
      if(target.closest('.booking') && (form.id == 'bookform')) {
        event.preventDefault();
        const data = new FormData(form);
        user_zip = data.get('zip').trim();
        user_zip = sanitizeZip(user_zip);
        job_type = data.get('jobtype').trim();
        toggleBookForm(document.querySelector('iframe', form.parentNode));
      }
    });
  });
}
checkServiceArea();